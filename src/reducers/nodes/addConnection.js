export default (nodes, input, output, portTypes) => ({
  ...nodes,
  [input.nodeId]: {
    ...nodes[input.nodeId],
    connections: {
      ...nodes[input.nodeId].connections,
      inputs: {
        ...nodes[input.nodeId].connections.inputs,
        [input.portName]: [
          ...(nodes[input.nodeId].connections.inputs[input.portName] || []),
          {
            nodeId: output.nodeId,
            portName: output.portName
          }
        ]
      }
    }
  },
  [output.nodeId]: {
    ...nodes[output.nodeId],
    connections: {
      ...nodes[output.nodeId].connections,
      outputs: {
        ...nodes[output.nodeId].connections.outputs,
        [output.portName]: [
          ...(nodes[output.nodeId].connections.outputs[output.portName] ||
            []),
          {
            nodeId: input.nodeId,
            portName: input.portName
          }
        ]
      }
    }
  }
});
