import reconcileNodes from './reconcileNodes';
import { nodesReducer } from './index';

export default (
  initialNodes = {},
  defaultNodes = [],
  nodeTypes,
  portTypes,
  context
) => {
  const reconciledNodes = reconcileNodes(initialNodes, nodeTypes, portTypes, context);

  return {
    ...reconciledNodes,
    ...defaultNodes.reduce((nodes, dNode, i) => {
      const nodeNotAdded = !Object.values(initialNodes).find(
        n => n.type === dNode.type
      );
      if (nodeNotAdded) {
        nodes = nodesReducer(
          nodes,
          {
            type: "ADD_NODE",
            id: `default-${i}`,
            defaultNode: true,
            x: dNode.x || 0,
            y: dNode.y || 0,
            nodeType: dNode.type
          },
          {nodeTypes, portTypes, context}
        );
      }
      return nodes;
    }, {})
  };
};
