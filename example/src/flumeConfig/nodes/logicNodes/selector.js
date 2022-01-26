import { Controls } from 'node-editor';
import _ from 'lodash';

export const selectorPort = {
  type: 'selector',
  name: 'selector',
  label: 'Selector',
};

const selectorPreset = (ports, data) =>
  data?.selector?.data
    ? [
        ports.selector({
          controls: [
            Controls.button({
              type: 'button1',
              name: 'data',
              defaultValue: undefined,
              label: `Edit...`,
              onPress: (inputData, nodeData, changeData) => {
                changeData({ test: 'ok' });
              },
            }),
            Controls.button({
              name: 'reset',
              defaultValue: undefined,
              label: 'Reset',
              onPress: (inputData, nodeData, changeData) => {
                changeData(undefined, 'data');
              },
            }),
          ],
        }),
      ]
    : [
        ports.selector({
          controls: [
            Controls.button({
              type: 'button1',
              name: 'data',
              defaultValue: undefined,
              label: `Browse...`,
              onPress: (inputData, nodeData, changeData) => {
                changeData({ test: 'ok' });
              },
            }),
          ],
        }),
      ];

export const selectorNode = {
  type: 'selector',
  label: 'Selector',
  inputs: (ports) => (data) =>
    [...selectorPreset(ports, data), ports.actionPort()],
  outputs: (ports) => [ports.actionPort()],
};

export const resolveSelectorNode = (node, inputValues, nodeType, context) => {
  const isFirst =
    _.size(node.connections.outputs) &&
    node.connections.outputs.actionPort[0].nodeId ===
      _.values(context.schema).find(({ root }) => root).id;

  const actionList = {
    actions: _.values(inputValues).reduce(
      (acc, val) => ({ ...acc, ...val?.actions }),
      {}
    ),
  };

  if (isFirst) {
    const nextNode = node.connections.inputs?.actionPort?.[0];

    if (nextNode)
      actionList.actions[nextNode.nodeId] = {
        ...actionList.actions[nextNode.nodeId],
        root: true,
      };
  }

  const selectorList = {
    selectors: _.values(inputValues).reduce(
      (acc, val) => ({
        ...acc,
        ...val?.selectors,
      }),
      {}
    ),
  };

  selectorList.selectors[node.id] = inputValues.selector.data;

  console.log(selectorList);

  return {
    actionPort: { ...actionList, ...selectorList },
  };
};
