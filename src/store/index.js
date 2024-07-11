import { createWithEqualityFn } from "zustand/traditional";

import { immer } from "zustand/middleware/immer";

import legacy_addConnection from "../reducers/nodes/addConnection";
import getDefaultData from "../reducers/nodes/getDefaultData";
import { createConnections } from "../connectionCalculator";

const defaultState = {
  stageRef: null,
  nodes: {},
  nodeTypes: {},
  portTypes: {},
  transform: [0, 0, 1],
};

export const useNodesAPI = createWithEqualityFn(
  immer((set, get) => ({
    ...defaultState,

    setStage(ref) {
      set({ stageRef: ref });
    },

    setNodeTypes(nodeTypes) {
      set({ nodeTypes });
    },

    setPortTypes(portTypes) {
      set({ portTypes });
    },

    createStarterNode(node) {
      set({
        nodes: node,
      });
    },

    onViewportChange(viewport) {
      const { recomputeConnections } = get();
      set({
        transform: viewport,
      });

      recomputeConnections();
    },

    addConnection(connection) {
      const { nodes, portTypes, recomputeConnections, ...state } = get();
      const { input, output } = connection;

      const inputIsNotConnected =
        !nodes[input.nodeId].connections.inputs[input.portName];

      if (inputIsNotConnected) {
        const newNodes = legacy_addConnection(nodes, input, output, portTypes);

        set({
          ...state,
          nodes: newNodes,
        });
      }
      recomputeConnections();
    },

    recomputeConnections() {
      const { nodes, nodeTypes, transform, stageRef } = get();
      const [x, y, zoom] = transform;

      createConnections(Object.values(nodes), nodeTypes, stageRef, {
        x,
        y,
        zoom,
      });
    },

    addNode(data) {
      const { nodes, nodeTypes, portTypes, recomputeConnections, ...state } =
        get();

      const { x, y, type, id, defaultNode, info } = data;
      const newNodeId = id || Math.random().toString(36).substring(7);
      const newNode = {
        id: newNodeId,
        x,
        y,
        info,
        type,
        connections: {
          inputs: {},
          outputs: {},
        },
        inputData: {},
        expanded: true,
      };
      newNode.inputData = getDefaultData({
        node: newNode,
        nodeType: nodeTypes[type],
        portTypes,
        context: {},
      });
      newNode.defaultNode = !!defaultNode ?? undefined;
      newNode.root = !!nodeTypes[type].root ?? undefined;
      newNode.actions = nodeTypes[type].actions ?? {};

      set({
        ...state,
        nodes: {
          ...nodes,
          [newNodeId]: newNode,
        },
      });
    },
  })),

  Object.is
);
