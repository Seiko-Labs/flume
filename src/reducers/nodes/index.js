import omit from "lodash/omit";
import difference from "lodash/difference";
import keys from "lodash/keys";
import pickBy from "lodash/pickBy";
import { deleteConnection } from "../../connectionCalculator";
import { checkForCircularNodes } from "../../utilities";
import nanoid from "nanoid/non-secure";
import removeNode from "./removeNode";
import addConnection from "./addConnection";
import removeConnection from "./removeConnection";
import getDefaultData from "./getDefaultData";

const copyObj = (o) => JSON.parse(JSON.stringify(o));

const copyNodes = (nodes, selectedNodeIds, clearView = true) => {
  const nodesToDelete = difference(keys(nodes), selectedNodeIds);
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
  { nodeTypes, portTypes, cache, circularBehavior, context, stageState }
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

      if (!inputIsNotConnected) return nodes;

      const allowCircular =
        circularBehavior === "warn" || circularBehavior === "allow";
      const newNodes = addConnection(nodes, input, output, portTypes);
      const isCircular = checkForCircularNodes(newNodes, output.nodeId);

      return isCircular && !allowCircular ? nodes : newNodes;
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

      return connections.reduce((accNodes, cnx) => {
        const [input, output] =
          transputType === "input" ? [transput, cnx] : [cnx, transput];
        const id =
          output.nodeId + output.portName + input.nodeId + input.portName;
        delete cache.current.connections[id];
        deleteConnection({ id });
        return removeConnection(accNodes, input, output);
      }, nodes);
    }

    case "ADD_NODE": {
      const { x, y, nodeType, id, defaultNode, info } = action;
      const newNodeId = id || nanoid(10);
      const newNode = {
        id: newNodeId,
        x,
        y,
        info,
        type: nodeType,
        connections: { inputs: {}, outputs: {} },
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
      const selectedNodeIds = difference(
        action.selectedNodeIds,
        keys(pickBy(nodes, ({ root }) => root))
      );
      if (!selectedNodeIds.length) return nodes;
      copyNodes(nodes, selectedNodeIds, false);
      return nodes;
    }

    case "CUT_NODES": {
      const selectedNodeIds = difference(
        action.selectedNodeIds,
        keys(pickBy(nodes, ({ root }) => root))
      );
      if (!selectedNodeIds.length) return nodes;

      copyNodes(nodes, selectedNodeIds);
      return selectedNodeIds.reduce(
        (stayNodes, id) => removeNode(stayNodes, id),
        nodes
      );
    }

    case "DEL_NODES": {
      const selectedNodeIds = difference(
        action.selectedNodeIds,
        keys(pickBy(nodes, ({ root }) => root))
      );
      if (!selectedNodeIds.length) return nodes;

      return selectedNodeIds.reduce(
        (stayNodes, id) => removeNode(stayNodes, id),
        nodes
      );
    }

    case "PASTE_NODES": {
      let JSONString = null;
      try {
        JSONString = localStorage.getItem("clipboard");
      } catch {
        return nodes;
      }
      if (!JSONString) return nodes;

      let parsed;
      try {
        parsed = JSON.parse(JSONString);
      } catch {
        return nodes;
      }

      const { application, nodes: newNodes } = parsed;
      if (application !== "PythonRPA" || !newNodes) return nodes;

      const oldMap = new Map();
      const editorArea = document.getElementById(window.STAGE_ID);
      if (!editorArea) return nodes;

      const { top, left } = editorArea.getBoundingClientRect();
      const fc = (positions) => {
        if (!positions.length) return null;
        const { x, y } = positions.reduce(
          (acc, pos) => ({ x: acc.x + pos.x, y: acc.y + pos.y }),
          { x: 0, y: 0 }
        );
        return { x: x / positions.length, y: y / positions.length };
      };

      const pasteResult = Object.fromEntries(
        (() => {
          const entries = Object.entries(newNodes);
          const center = fc(entries.map(([_, body]) => body));

          const replacer = (entry) => {
            let result = JSON.stringify(entry);
            oldMap.forEach((newId, oldId) => {
              result = result.replace(new RegExp(oldId, "g"), newId);
            });
            return JSON.parse(result);
          };

          const result = entries
            .map(([oldId, body]) => {
              const newId = nanoid(10);
              oldMap.set(oldId, newId);
              return [newId, body];
            })
            .map(([newId, body]) => {
              body.connections = {
                inputs: replacer(body.connections.inputs),
                outputs: replacer(body.connections.outputs),
              };

              const lastMousePositionRaw =
                localStorage.getItem("lastMousePosition");
              const lastMousePosition = lastMousePositionRaw
                ? JSON.parse(lastMousePositionRaw)
                : { x: 20, y: 20 };

              const scaledMousePosition = {
                x:
                  (lastMousePosition.x - left - stageState.translate.x) /
                  stageState.scale,
                y:
                  (lastMousePosition.y - top - stageState.translate.y) /
                  stageState.scale,
              };

              const offset = {
                x: center.x - body.x,
                y: center.y - body.y,
              };

              return [
                newId,
                {
                  ...body,
                  id: newId,
                  x: scaledMousePosition.x - offset.x,
                  y: scaledMousePosition.y - offset.y,
                },
              ];
            });

          return result;
        })()
      );

      return {
        ...nodes,
        ...pasteResult,
      };
    }

    case "REMOVE_NODE": {
      const { nodeId } = action;
      const result = removeNode(nodes, nodeId);

      return result;
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
      // Safer merge: guard against missing node/port buckets
      const { nodeId, portName, controlName, data, setValue } = action;

      const node = nodes[nodeId];
      if (!node) return nodes;

      const prevInputData = node.inputData ?? {};
      const prevPortData = prevInputData[portName] ?? {};

      let nextInputData = {
        ...prevInputData,
        [portName]: {
          ...prevPortData,
          [controlName]: data,
        },
      };

      if (typeof setValue === "function") {
        // allow setValue to adjust the whole inputData (pass previous for diffing)
        nextInputData = setValue(nextInputData, prevInputData) ?? nextInputData;
      }

      return {
        ...nodes,
        [nodeId]: {
          ...node,
          inputData: nextInputData,
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
      const updates = Object.assign(
        {},
        ...nodesInfo.map(({ nodeId, x, y }) => ({
          [nodeId]: { ...nodes[nodeId], x, y },
        }))
      );
      return { ...nodes, ...updates };
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

export const connectNodesReducer = (reducer, environment) => (state, action) =>
  reducer(state, action, environment);

export default (...props) => {
  const [stateArg, action] = props;

  // Avoid mutating incoming args
  const baseState =
    stateArg.nodesState.length > 30
      ? {
          nodesState: [stateArg.nodesState[stateArg.currentStateIndex]],
          currentStateIndex: 0,
        }
      : stateArg;

  let { nodesState, currentStateIndex } = baseState;

  switch (action.type) {
    case "UNDO_CHANGES": {
      return currentStateIndex > 0
        ? { currentStateIndex: currentStateIndex - 1, nodesState }
        : copyObj(baseState);
    }

    case "REDO_CHANGES": {
      return currentStateIndex + 1 < nodesState.length
        ? { currentStateIndex: currentStateIndex + 1, nodesState }
        : copyObj(baseState);
    }

    case "COPY_NODES": {
      nodesReducer(baseState, action, props[2]); // side-effect: writes clipboard
      return copyObj(baseState);
    }

    case "COMMENT": {
      const nodes = nodesState[currentStateIndex].state;
      const newState = copyObj(baseState);
      const { id, value } = action;

      // Walk stored frames (original behavior), but update current frame
      for (const frame of nodesState) {
        for (const nodeID of Object.keys(frame.state)) {
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
      const { id: nodeId, doExpand } = action;
      const nodes = nodesState[currentStateIndex].state;
      const newState = copyObj(baseState);

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
      const test = () => {
        const filteredNodes = Object.fromEntries(
          Object.entries(nodesReducer(baseState, action, props[2])).filter(
            ([id, nodeObject]) => nodeObject && nodeObject.id !== undefined
          )
        );

        const isSlice =
          nodesState.length > 1 && currentStateIndex < nodesState.length - 1;

        if (action.type === "SET_PORT_DATA") {
          // Keep the same history index, but update immutably
          const ns = nodesState.slice();
          ns[currentStateIndex] = {
            ...ns[currentStateIndex],
            state: filteredNodes,
            action,
          };
          return { nodesState: ns, currentStateIndex };
        }

        if (action.type === "HYDRATE_DEFAULT_NODES") {
          return {
            nodesState: [{ action, state: filteredNodes }],
            currentStateIndex: 0,
          };
        }

        const nextNodesState = [
          ...nodesState.slice(
            0,
            isSlice ? currentStateIndex + 1 : nodesState.length
          ),
          { action, state: filteredNodes },
        ];

        return {
          nodesState: nextNodesState,
          currentStateIndex: currentStateIndex + 1,
        };
      };

      const result = test();

      return result;
    }
  }
};
