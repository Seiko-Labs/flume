import _ from 'lodash';
import {
  configErrorBlockPreset,
  resolveErrorBlockPreset,
} from '../../../shared/presets/errorBlockPreset';

export const switchCaseNode = {
  type: 'switch_case',
  name: 'switch_case',
  label: 'SWITCH..CASE',
  description: 'Any kind of an action',
  inputs: (ports) => (data, connections) => {
    const conditions = _.entries(data).filter(
      ([k, v]) => k.indexOf('condition') >= 0 && v.text
    );

    return [
      ...conditions.map(([k, v], ind) =>
        ports.string({
          name: k,
          label: `Condition ${ind + 1}`,
          hidePort: true,
        })
      ),
      ports.string({
        name: `condition${
          Number(
            conditions.length &&
              conditions[conditions.length - 1][0].replace(/\D+/g, '')
          ) + 1
        }`,
        label: `Condition ${conditions.length + 1}`,
        hidePort: true,
      }),
      ...conditions.map(([k], ind) =>
        ports.actionPort({
          color: '#5ED28E',
          name: `${k}_action`,
          label: `Condition ${ind + 1} case action`,
        })
      ),
      ports.actionPort({
        color: '#5ED28E',
        name: 'elseCaseAction',
        label: 'Default case action',
      }),
      ...configErrorBlockPreset(ports, connections),
    ];
  },
  outputs: (ports) => [
    ports.actionPort({
      label: 'Previous action',
    }),
  ],
};

export const resolveSwitchCaseNode = (node, inputValues, nodeType, context) => {
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
    class: 'conditions',
    function: 'switch_case',
    class_params: {},
    func_params: {
      conditions_and_cases: _.entries(node.connections.inputs)
        .filter(([k]) => k.indexOf('condition') !== -1)
        .reduce(
          (acc, [k, v]) => ({
            ...acc,
            [inputValues[k.substring(0, k.length - 7)].text]: v[0].nodeId,
          }),
          {}
        ),
      else_case:
        node.connections.inputs?.elseCaseAction?.length &&
        node.connections.inputs?.elseCaseAction[0]?.nodeId,
    },
    breakpoint: false,
    ...resolveErrorBlockPreset(node, inputValues),
    next_id: 'condition',
  };

  return { actionPort: actionList };
};
