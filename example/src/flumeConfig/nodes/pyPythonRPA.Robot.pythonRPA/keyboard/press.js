import _ from 'lodash';
import {
  configErrorBlockPreset,
  resolveErrorBlockPreset,
} from '../../../shared/presets/errorBlockPreset';

export const pressNode = {
  type: 'press',
  name: 'press',
  label: 'PRESS',
  description: 'Any kind of an action',
  inputs: (ports) => (_, connections) =>
    [
      ports.string({
        name: 'keys',
        label: 'Keys',
        hidePort: true,
      }),
      ports.decimal({
        name: 'timing_after',
        label: 'Wait after',
        hidePort: true,
      }),
      ports.decimal({
        name: 'timing_before',
        label: 'Wait before',
        hidePort: true,
      }),
      ports.number({
        name: 'n_time',
        label: 'Press times',
        hidePort: true,
      }),
      ports.actionPort({
        color: '#5ED28E',
        name: 'nextAction',
        label: 'Next action',
      }),
      ...configErrorBlockPreset(ports, connections),
    ],
  outputs: (ports) => [
    ports.actionPort({
      label: 'Previous action',
    }),
  ],
};

export const resolvePressNode = (node, inputValues, nodeType, context) => {
  if (_.isEmpty(context?.schema)) return;

  const isFirst =
    _.size(node.connections.outputs) &&
    node.connections.outputs.actionPort[0].nodeId ===
      _.values(context.schema).find((node) => node.root).id;
  const actionList = {
    actions: _.values(inputValues).reduce(
      (acc, val) => ({ ...acc, ...val?.actions }),
      {}
    ),
  };

  actionList.actions[node.id] = {
    ...(isFirst && { start: true }),
    name: nodeType.label,
    module: 'pyPythonRPA.Robot.pythonRPA',
    class: 'keyboard',
    function: 'press',
    class_params: {},
    func_params: {
      keys: inputValues.keys.text,
      timing_after: inputValues.timing_after.number,
      timing_before: inputValues.timing_before.number,
      n_time: inputValues.n_time.number,
    },
    breakpoint: false,
    ...resolveErrorBlockPreset(node, inputValues),
    next_id: node.connections.inputs?.nextAction?.length
      ? node.connections.inputs?.nextAction[0]?.nodeId
      : 'finish',
  };

  return { actionPort: actionList };
};

/*
{
  "name": "keyboard_write",
  "module": "pyPythonRPA.Robot.pythonRPA",
  "class": "keyboard",
  "function": "press",
  "class_params": {},
  "func_params": {
    "keys": "          string || ex: 'enter' || required",
    "timing_after": "  float  || ex: 0.1                  || default 0.3",
    "timing_before": " float  || ex: 0.1                  || default 0.05",
    "n_time": "        int    || ex: 1                    || default 1"
  },
  "results": null,
  "object": null,
  "inherit_object": null,
  "breakpoint": false,
  "if_error": {
    "go_to": "block_id",
    "repeat": 1,
    "counter": 0
  },
  "next_id": "7"
}

 */
