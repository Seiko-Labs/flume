import _ from "lodash";
import {
  configErrorBlockPreset,
  resolveErrorBlockPreset,
} from "../../../shared/presets/errorBlockPreset";

export const delayNode = {
  type: "delay",
  name: "delay",
  label: "DELAY",
  description: "Any kind of an action",
  inputs: (ports) => (_, connections) =>
    [
      ports.decimal({
        name: "duration",
        label: "Duration (in seconds)",
        hidePort: true,
      }),
      ports.actionPort({
        name: "nextAction",
        label: "Next action",
      }),
      ...configErrorBlockPreset(ports, connections),
    ],
  outputs: (ports) => [
    ports.actionPort({
      label: "Previous action",
    }),
  ],
};

export const resolveDelayNode = (node, inputValues, nodeType, context) => {
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
    class: "time",
    function: "delay",
    class_params: {},
    func_params: {
      sec: inputValues.duration.number,
    },
    breakpoint: false,
    ...resolveErrorBlockPreset(node, inputValues),
    next_id: node.connections.inputs?.nextAction?.length
      ? node.connections.inputs?.nextAction[0]?.nodeId
      : "finish",
  };

  return { actionPort: actionList };
};

/*

{
  "name": "delay",
  "module": "pyPythonRPA.Robot.pythonRPA",
  "class": "time",
  "function": "delay",
  "class_params": {},
  "func_params": {
    "sec": "int || ex: 1 || required"
  },
  "results": null,
  "object": null,
  "inherit_object": null,
  "break_point": false,
  "if_error": {
    "go_to": "block_id",
    "repeat": 1,
    "counter": 0,
    "delay": 0
  },
  "next_id": ""
}

 */
