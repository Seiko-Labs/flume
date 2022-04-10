import getFilteredTransputs from './getFilteredTransputs';

export default (connections, nodeId) => ({
  inputs: getFilteredTransputs(connections.inputs, nodeId),
  outputs: getFilteredTransputs(connections.outputs, nodeId)
});
