import { deleteConnectionsByNodeId } from '../../connectionCalculator';
import removeConnections from './removeConnections';

export default (startNodes, nodeId, clearView = true) => {
  let {[nodeId]: deletedNode, ...nodes} = startNodes;
  nodes = Object.values(nodes).reduce((obj, node) => {
    obj[node.id] = {
      ...node,
      connections: removeConnections(node.connections, nodeId)
    };

    return obj;
  }, {});
  clearView && deleteConnectionsByNodeId(nodeId);
  return nodes;
};
