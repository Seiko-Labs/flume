export const checkForCircularNodes = (nodes, startNodeId) => {
  let isCircular = false;
  const walk = nodeId => {
    const outputs = Object.values(nodes[nodeId].connections.outputs);
    for (const outputConnections of outputs) {
      if ( isCircular ) {
        break;
      }
      for (const connectedTo of outputConnections) {
        if ( connectedTo.nodeId === startNodeId ) {
          isCircular = true;
          break;
        } else {
          walk(connectedTo.nodeId)
        }
      }
    }
  }
  walk(startNodeId)
  return isCircular;
}
