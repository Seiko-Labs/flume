import _ from "lodash";
import {
  configErrorBlockPreset,
  resolveErrorBlockPreset,
} from "../../../shared/presets/errorBlockPreset";

export const loopWhileNode = {
  type: "loop_while",
  name: "loop_while",
  label: "WHILE",
  description: "Any kind of an action",
  inputs: (ports) => (_, connections) =>
    [
      ports.string({
        name: "image_path",
        label: "Image",
        hidePort: true,
      }),
      ports.actionPort({
        name: "trueCaseAction",
        label: "Loop actions",
      }),
      ports.actionPort({
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

export const resolveLoopWhileNode = (node, inputValues, nodeType, context) => {
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
    function: "loop_while",
    class_params: {},
    func_params: {
      condition: inputValues.condition.text,
      true_case:
        node.connections.inputs?.trueCaseAction?.length &&
        node.connections.inputs?.trueCaseAction[0]?.nodeId,
      false_case:
        node.connections.inputs?.falseCaseAction?.length &&
        node.connections.inputs?.falseCaseAction[0]?.nodeId,
    },
    breakpoint: false,
    ...resolveErrorBlockPreset(node, inputValues),
    next_id: "condition",
  };

  return { actionPort: actionList };
};
