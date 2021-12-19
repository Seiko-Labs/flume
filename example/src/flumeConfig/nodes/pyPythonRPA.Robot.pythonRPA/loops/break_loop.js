import React from "react";
import _ from "lodash";
import { Controls } from "node-editor";
import styled from "styled-components";
import {
  configErrorBlockPreset,
  resolveErrorBlockPreset,
} from "../../../shared/presets/errorBlockPreset";

const Button = styled.div`
  height: 20px;
  width: 20px;
  background-color: green;
`;

const Breakpoint = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  border: 2px solid #f23d63;
  background: ${({ active }) => (active ? "#f23d63" : "transparent")};
`;

export const breakLoopNode = {
  type: "break_loop",
  name: "break_loop",
  label: "BREAK LOOP",
  description: "Any kind of an action",
  actions: {
    buttons: [
      (
        actionsData,
        actionsDispatch,
        inputData,
        connections,
        nodeData,
        nodesDispatch
      ) => (
        <Breakpoint
          active={actionsData.breakpoint}
          onClick={() =>
            actionsDispatch((data) => ({
              ...data,
              breakpoint: !data.breakpoint,
            }))
          }
        />
      ),
    ],
  },
  inputs: (ports) => (_, connections) =>
    [
      ports.string({
        name: "condition",
        label: "Condition",
        hidePort: true,
        controls: [
          Controls.text({
            validate: (text) => text !== "lol",
          }),
        ],
      }),
      ports.actionPort({
        color: "#5ED28E",
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
