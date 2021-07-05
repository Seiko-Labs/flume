import { nodesReducer } from './index';
import getDefaultData from './getDefaultData';

export default (initialNodes, nodeTypes, portTypes, context) => {
  let nodes = {...initialNodes};

  // Delete extraneous nodes
  let nodesToDelete = Object.values(nodes)
                            .map(node => (!nodeTypes[node.type] ? node.id : undefined))
                            .filter(x => x);

  nodesToDelete.forEach(nodeId => {
    nodes = nodesReducer(
      nodes,
      {
        type: "REMOVE_NODE",
        nodeId
      },
      {nodeTypes, portTypes, context}
    );
  });

  // Reconcile input data for each node
  let reconciledNodes = Object.values(nodes).reduce((nodesObj, node) => {
    const nodeType = nodeTypes[node.type];
    const defaultInputData = getDefaultData({
      node,
      nodeType,
      portTypes,
      context
    });
    const currentInputData = Object.entries(node.inputData).reduce(
      (dataObj, [key, data]) => {
        if (defaultInputData[key] !== undefined) {
          dataObj[key] = data;
        }
        return dataObj;
      },
      {}
    );
    const newInputData = {
      ...defaultInputData,
      ...currentInputData
    };
    nodesObj[node.id] = {
      ...node,
      inputData: newInputData
    };
    return nodesObj;
  }, {});

  // Reconcile node attributes for each node
  reconciledNodes = Object.values(reconciledNodes).reduce((nodesObj, node) => {
    let newNode = {...node};
    const nodeType = nodeTypes[node.type];
    if (nodeType.root !== node.root) {
      if (nodeType.root && !node.root) {
        newNode.root = nodeType.root;
      } else if (!nodeType.root && node.root) {
        delete newNode.root;
      }
    }
    nodesObj[node.id] = newNode;
    return nodesObj;
  }, {});

  return reconciledNodes;
};
