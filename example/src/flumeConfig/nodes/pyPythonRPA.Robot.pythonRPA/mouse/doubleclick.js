import _ from "lodash";
import {
  configErrorBlockPreset,
  resolveErrorBlockPreset,
} from "../../../shared/presets/errorBlockPreset";

export const doubleClickNode = {
  type: "double_click",
  name: "double_click",
  label: "DOUBLE CLICK",
  description: "Any kind of an action",
  inputs: (ports) => (_, connections) =>
    [
      ports.number({
        name: "x",
        label: "X axis",
        hidePort: true,
      }),
      ports.number({
        name: "y",
        label: "Y axis",
        hidePort: true,
      }),
      ports.number({
        name: "interval",
        label: "Click interval",
        hidePort: true,
      }),
      ports.buttonPort({
        hidePort: true,
      }),
      ports.decimal({
        name: "duration",
        label: "Duration (in seconds)",
        hidePort: true,
      }),
      ports.actionPort({
        color: "#5ED28E",
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

export const resolveDoubleClickNode = (
  node,
  inputValues,
  nodeType,
  context
) => {
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
    class: "double_click",
    function: "click",
    class_params: {},
    func_params: {
      x: inputValues.x.number,
      y: inputValues.y.number,
      interval: inputValues.interval.number,
      button: inputValues.interval.value,
      duration: inputValues.duration.number,
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
  "name": "mouse double click",
  "module": "pyPythonRPA.Robot.pythonRPA",
  "class": "mouse",
  "function": "click",
  "class_params": {
  },
  "func_params": {
    "x": "       int    || ex: 1920  || required",
    "y": "       int    || ex: 1080  || required",
    "interval": "float  || ex: 0.1                || default 0.0",
    "button": "  string || ex: 'left'             || default 'left'",
    "duration": "float  || ex: 0.1                || default 0.0"
  },
  "results": null,
  "object": null,
  "inherit_object": null,
  "breakpoint": false,
  "if_error": {
    "go_to": "block_id",
    "repeat": 1,
    "counter": 0,
    "delay": 0
  },
  "next_id": "finish"
}

 */
