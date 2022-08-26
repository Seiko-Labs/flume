import _ from "lodash";
import {
  configErrorBlockPreset,
  resolveErrorBlockPreset,
} from "../../../shared/presets/errorBlockPreset";

export const forINode = {
  type: "for_i",
  name: "for_i",
  label: "FOR..I",
  description: "Any kind of an action",
  inputs: (ports) => (_, connections) =>
    [
      ports.number({
        name: "from",
        label: "Start from integer",
        hidePort: true,
      }),
      ports.number({
        name: "to",
        label: "Repeat until integer",
        hidePort: true,
      }),
      ports.number({
        name: "step",
        label: "Step size",
        hidePort: true,
      }),
      ports.actionPort({
        color: "#4BAEFC",
        name: "trueCaseAction",
        label: "Loop actions",
      }),
      ports.actionPort({
        color: "#5ED28E",
        name: "falseCaseAction",
        label: "After loop actions",
      }),
      ...configErrorBlockPreset(ports, connections),
    ],
  outputs: (ports) => [
    ports.actionPort({
      label: "Previous action",
    }),
  ],
};

export const resolveForINode = (node, inputValues, nodeType, context) => {
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
    module: "pyPythonRPA.Robot.pythonRPA",
    class: "loops",
    function: "for_i",
    class_params: {},
    func_params: {
      range:
        inputValues.from.number && inputValues.step.number
          ? [
              inputValues.from.number,
              inputValues.to.number,
              inputValues.step.number,
            ]
          : [inputValues.to.number],
      true_case:
        node.connections.inputs?.trueCaseAction?.length &&
        node.connections.inputs?.trueCaseAction[0]?.nodeId,
      false_case:
        node.connections.inputs?.falseCaseAction?.length &&
        node.connections.inputs?.falseCaseAction[0]?.nodeId,
    },
    state: {
      iteration: 0,
      i: 0,
      initial_state: true,
    },
    breakpoint: false,
    ...resolveErrorBlockPreset(node, inputValues),
    next_id: "condition",
  };

  return { actionPort: actionList };
};
