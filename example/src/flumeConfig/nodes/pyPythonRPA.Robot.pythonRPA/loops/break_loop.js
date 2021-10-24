import _ from "lodash";
import {
  configErrorBlockPreset,
  resolveErrorBlockPreset,
} from "../../../shared/presets/errorBlockPreset";

export const breakLoopNode = {
  type: "break_loop",
  name: "break_loop",
  label: "BREAK LOOP",
  description: "Any kind of an action",
  inputs: (ports) => (_, connections) =>
    [
      ports.string({
        name: "condition",
        label: "Condition",
        hidePort: true,
      }),
      ports.actionPort({
        name: "elseCaseAction",
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

export const resolveBreakLoopNode = (node, inputValues, nodeType, context) => {
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
    function: "break_loop",
    class_params: {},
    func_params: {
      condition: inputValues.condition.text,
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

/*
{
  "name": "while",
  "module": "pyPythonRPA.Robot.pythonRPA",
  "class": "loop",
  "function": "break_loop",
  "class_params": {},
  "func_params": {
    "condition": "\"a\" in example_var3",
    "else_case": "start",
    "used_glob_vars": [
      "example_var3"
    ]
  },
  "results": null,
  "object": null,
  "inherit_object": null,
  "breakpoint": false,
  "next_id": "condition"
}
 */
