import { Colors } from 'node-editor';

export const configErrorBlockPreset = (ports, connections) => [
  ports.errorPort({
    optional: true,
  }),
  ports.actionPort({
    name: 'errorAction',
    label: 'Error action',
    color: '#F16969',
  }),
];

export const resolveErrorBlockPreset = (node, inputValues) => ({
  if_error: {
    go_to:
      node.connections.inputs?.errorAction?.length &&
      node.connections.inputs?.errorAction[0].nodeId,
    repeat: inputValues.errorPort.repeat,
    counter: 0,
    delay: inputValues.errorPort.delay,
  },
});
