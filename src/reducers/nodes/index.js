import { omit } from "lodash/object";
import { deleteConnection } from "../../connectionCalculator";
import { checkForCircularNodes } from "../../utilities";
import nanoid from "nanoid/non-secure/index";
import _ from "lodash";
import removeNode from "./removeNode";
import addConnection from "./addConnection";
import removeConnection from "./removeConnection";
import getDefaultData from "./getDefaultData";

const copyObj = (o) => JSON.parse(JSON.stringify(o));

const copyNodes = (nodes, selectedNodeIds, clearView = true) => {
  const nodesToDelete = _.difference(_.keys(nodes), selectedNodeIds);
  const nodesToCopy = nodesToDelete.reduce(
    (stayNodes, id) => removeNode(stayNodes, id, clearView),
    nodes
  );

  localStorage.setItem(
    "clipboard",
    JSON.stringify({
      application: "PythonRPA",
      nodes: nodesToCopy,
    })
  );
};

export const nodesReducer = (
  { nodesState, currentStateIndex },
  action = {},
  { nodeTypes, portTypes, cache, circularBehavior, context },
  dispatchToasts
) => {
  const nodes =
    (nodesState &&
      nodesState.length &&
      currentStateIndex >= 0 &&
      nodesState[currentStateIndex].state) ||
    {};
  switch (action.type) {
    case "ADD_CONNECTION": {
      const { input, output } = action;
      const inputIsNotConnected =
        !nodes[input.nodeId].connections.inputs[input.portName];
      if (inputIsNotConnected) {
        const allowCircular =
          circularBehavior === "warn" || circularBehavior === "allow";
        const newNodes = addConnection(nodes, input, output, portTypes);
        const isCircular = checkForCircularNodes(newNodes, output.nodeId);
        if (isCircular && !allowCircular) {
          dispatchToasts({
            type: "ADD_TOAST",
            title: "Unable to connect",
            message: "Connecting these nodes would result in an infinite loop.",
            toastType: "warning",
            duration: 5000,
          });
          return nodes;
        } else {
          if (isCircular && circularBehavior === "warn") {
            dispatchToasts({
              type: "ADD_TOAST",
              title: "Circular Connection Detected",
              message: "Connecting these nodes has created an infinite loop.",
              toastType: "warning",
              duration: 5000,
            });
          }
          return newNodes;
        }
      } else return nodes;
    }

    case "REMOVE_CONNECTION": {
      const { input, output } = action;
      const id =
        output.nodeId + output.portName + input.nodeId + input.portName;
      delete cache.current.connections[id];
      deleteConnection({ id });
      return removeConnection(nodes, input, output);
    }

    case "DESTROY_TRANSPUT": {
      const { transput, transputType } = action;
      const portId = transput.nodeId + transput.portName + transputType;
      delete cache.current.ports[portId];

      const cnxType = transputType === "input" ? "inputs" : "outputs";
      const connections =
        nodes[transput.nodeId].connections[cnxType][transput.portName];
      if (!connections || !connections.length) return nodes;

      return connections.reduce((nodes, cnx) => {
        const [input, output] =
          transputType === "input" ? [transput, cnx] : [cnx, transput];
        const id =
          output.nodeId + output.portName + input.nodeId + input.portName;
        delete cache.current.connections[id];
        deleteConnection({ id });
        return removeConnection(nodes, input, output);
      }, nodes);
    }

    case "ADD_NODE": {
      const { x, y, nodeType, id, defaultNode } = action;
      const newNodeId = id || nanoid(10);
      const newNode = {
        id: newNodeId,
        x,
        y,
        type: nodeType,
        connections: {
          inputs: {},
          outputs: {},
        },
        inputData: {},
        expanded: true,
      };
      newNode.inputData = getDefaultData({
        node: newNode,
        nodeType: nodeTypes[nodeType],
        portTypes,
        context,
      });
      newNode.defaultNode = !!defaultNode || undefined;
      newNode.root = !!nodeTypes[nodeType].root || undefined;
      newNode.actions = omit(nodeTypes[nodeType].actions || {}, ["buttons"]);

      return {
        ...nodes,
        [newNodeId]: newNode,
      };
    }

    case "COPY_NODES": {
      const selectedNodeIds = _.difference(
        action.selectedNodeIds,
        _.keys(_.pickBy(nodes, ({ root }) => root))
      );
      if (!selectedNodeIds.length) return nodes;

      copyNodes(nodes, selectedNodeIds, false);

      return nodes;
    }

    case "CUT_NODES": {
      const selectedNodeIds = _.difference(
        action.selectedNodeIds,
        _.keys(_.pickBy(nodes, ({ root }) => root))
      );

      if (!selectedNodeIds.length) return nodes;

      copyNodes(nodes, selectedNodeIds);

      return selectedNodeIds.reduce(
        (stayNodes, id) => removeNode(stayNodes, id),
        nodes
      );
    }

    case "DEL_NODES": {
      const selectedNodeIds = _.difference(
        action.selectedNodeIds,
        _.keys(_.pickBy(nodes, ({ root }) => root))
      );

      if (!selectedNodeIds.length) return nodes;

      return selectedNodeIds.reduce(
        (stayNodes, id) => removeNode(stayNodes, id),
        nodes
      );
    }

    case "PASTE_NODES": {
      const JSONString = localStorage.getItem("clipboard");
      const { application, nodes: newNodes } = JSON.parse(JSONString);

      if (application === "PythonRPA" && newNodes) {
        const newJSONString = _.keys(newNodes).reduce((jsonString, id) => {
          const newId = nanoid(10);
          return jsonString.replaceAll(`"${id}"`, `"${newId}"`);
        }, JSON.stringify(newNodes));
        const newJSON = JSON.parse(newJSONString);

        _.forOwn(newJSON, (_, key) => {
          newJSON[key] = {
            ...newJSON[key],
            x: newJSON[key].x + 20,
            y: newJSON[key].y + 20,
          };
        });
        localStorage.setItem(
          "clipboard",
          JSON.stringify({
            application: "PythonRPA",
            nodes: newJSON,
          })
        );

        return {
          ...nodes,
          ...newJSON,
        };
      }

      return nodes;
    }

    case "REMOVE_NODE": {
      const { nodeId } = action;

      return removeNode(nodes, nodeId);
    }

    case "HYDRATE_DEFAULT_NODES": {
      const newNodes = { ...nodes };

      for (const key in newNodes) {
        if (newNodes[key].defaultNode) {
          const newNodeId = nanoid(10);
          const { id, defaultNode, ...node } = newNodes[key];

          newNodes[newNodeId] = { ...node, id: newNodeId };
          delete newNodes[key];
        }
      }

      return newNodes;
    }

    case "SET_PORT_DATA": {
      const { nodeId, portName, controlName, data, setValue } = action;
      let newData = {
        ...nodes[nodeId].inputData,
        [portName]: {
          ...nodes[nodeId].inputData[portName],
          [controlName]: data,
        },
      };
      if (setValue) {
        newData = setValue(newData, nodes[nodeId].inputData);
      }
      return {
        ...nodes,
        [nodeId]: {
          ...nodes[nodeId],
          inputData: newData,
        },
      };
    }

    case "SET_NODE_DATA": {
      const { comment, nodeId } = action;
      return {
        ...nodes,
        [nodeId]: {
          ...nodes[nodeId],
          comment: comment?.length ? comment : undefined,
        },
      };
    }

    case "SET_NODE_COORDINATES": {
      const { x, y, nodeId } = action;
      return {
        ...nodes,
        [nodeId]: {
          ...nodes[nodeId],
          x,
          y,
        },
      };
    }

    case "SET_MULTIPLE_NODES_COORDINATES": {
      const { nodesInfo } = action;
      return {
        ...nodes,
        ...Object.assign(
          {},
          ...nodesInfo.map(({ nodeId, x, y }) => ({
            [nodeId]: {
              ...nodes[nodeId],
              x,
              y,
            },
          }))
        ),
      };
    }

    case "UPDATE_NODE_ACTION_DATA": {
      const { data, nodeId } = action;

      return {
        ...nodes,
        [nodeId]: {
          ...nodes[nodeId],
          actions: {
            ...nodes[nodeId].actions,
            data,
          },
        },
      };
    }

    default:
      return nodes;
  }
};

export const connectNodesReducer =
  (reducer, environment, dispatchToasts) => (state, action) =>
    reducer(state, action, environment, dispatchToasts);

export default (...props) => {
  const { nodesState, currentStateIndex } = props[0];

  switch (props[1].type) {
    case "UNDO_CHANGES": {
      return currentStateIndex > 0
        ? { currentStateIndex: currentStateIndex - 1, nodesState }
        : copyObj(props[0]);
    }
    case "REDO_CHANGES": {
      return currentStateIndex + 1 < nodesState.length
        ? { currentStateIndex: currentStateIndex + 1, nodesState }
        : copyObj(props[0]);
    }
    case "COPY_NODES": {
      nodesReducer(...props);
      return copyObj(props[0]);
    }
    case "COMMENT": {
      const nodes = props[0].nodesState[props[0].currentStateIndex].state;
      const newState = copyObj(props[0]);

      for (const node of nodesState) {
        const { id, value } = props[1];
        for (const nodeID of Object.keys(node.state)) {
          if (id === nodeID) {
            newState.nodesState[newState.currentStateIndex].state = {
              ...nodes,
              [nodeID]: {
                ...nodes[nodeID],
                comment: value,
              },
            };
          }
        }
      }
      return newState;
    }
    case "TOGGLE_NODE_VIEW": {
      const { id: nodeId, doExpand } = props[1];
      const nodes = props[0].nodesState[props[0].currentStateIndex].state;
      const newState = copyObj(props[0]);

      newState.nodesState[newState.currentStateIndex].state = {
        ...nodes,
        [nodeId]: {
          ...nodes[nodeId],
          expanded: doExpand ? doExpand : !nodes[nodeId].expanded,
        },
      };

      return newState;
    }
    default: {
      const nodesState = props[0].nodesState;
      const nodes = nodesReducer(...props);
      const isSlice =
        nodesState.length > 1 && currentStateIndex < nodesState.length - 1;

      return props[1].type === "HYDRATE_DEFAULT_NODES"
        ? {
            nodesState: [{ action: props[1], state: nodes }],
            currentStateIndex: 0,
          }
        : {
            nodesState: [
              ...nodesState.slice(
                0,
                isSlice ? currentStateIndex + 1 : nodesState.length
              ),
              {
                action: props[1],
                state: nodes,
              },
            ],
            currentStateIndex: currentStateIndex + 1,
          };
    }
  }
};
