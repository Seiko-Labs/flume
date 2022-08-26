import _ from "lodash";
import {
  configErrorBlockPreset,
  resolveErrorBlockPreset,
} from "../../../shared/presets/errorBlockPreset";

export const forEachNode = {
  type: "for_each",
  name: "for_each",
  label: "FOR..EACH",
  description: "Any kind of an action",
  inputs: (ports) => (_, connections) =>
    [
      ports.string({
        name: "data",
        label: "Array or dictionary",
        hidePort: true,
      }),
      ports.string({
        name: "iterator",
        label: "Iterator variable name",
        hidePort: true,
      }),
      ports.string({
        name: "index",
        label: "Indexing variable name",
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

export const resolveForEachNode = (node, inputValues, nodeType, context) => {
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
  let lst;

  try {
    lst = JSON.parse(inputValues.data.text);
  } catch (e) {
    lst = inputValues.data.text;
  }

  actionList.actions[node.id] = {
    ...(isFirst && { start: true }),
    name: nodeType.label,
    module: "pyPythonRPA.Robot.pythonRPA",
    class: "loops",
    function: "for_each",
    class_params: {},
    func_params: {
      lst: lst,
      key_name: inputValues.index.text,
      value_name: inputValues.iterator.text,
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
