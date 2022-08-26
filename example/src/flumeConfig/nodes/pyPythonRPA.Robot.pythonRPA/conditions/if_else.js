import _ from "lodash";
import {
  configErrorBlockPreset,
  resolveErrorBlockPreset,
} from "../../../shared/presets/errorBlockPreset";

export const ifElseNode = {
  type: "if_else",
  name: "if_else",
  label: "IF..ELSE",
  description: "Any kind of an action",
  inputs: (ports) => (_, connections) =>
    [
      ports.string({
        name: "condition",
        label: "Condition",
        hidePort: true,
      }),
      ports.actionPort({
        color: "#5ED28E",
        name: "trueCaseAction",
        label: "True case action",
      }),
      ports.actionPort({
        color: "#5ED28E",
        name: "falseCaseAction",
        label: "False case action",
      }),
      ...configErrorBlockPreset(ports, connections),
    ],
  outputs: (ports) => [
    ports.actionPort({
      label: "Previous action",
    }),
  ],
};

export const resolveIfElseNode = (node, inputValues, nodeType, context) => {
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
    class: "conditions",
    function: "if_else",
    class_params: {},
    func_params: {
      condition: inputValues.condition.text,
      if_case:
        node.connections.inputs?.trueCaseAction?.length &&
        node.connections.inputs?.trueCaseAction[0]?.nodeId,
      else_case:
        node.connections.inputs?.falseCaseAction?.length &&
        node.connections.inputs?.falseCaseAction[0]?.nodeId,
    },
    breakpoint: false,
    ...resolveErrorBlockPreset(node, inputValues),
    next_id: "condition",
  };

  return { actionPort: actionList };
};
