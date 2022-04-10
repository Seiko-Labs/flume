import { ifElseNode, resolveIfElseNode } from './if_else';
import { resolveSwitchCaseNode, switchCaseNode } from './switch_case';

export const applyConditionsConfig = (config) => {
  config.addNodeType(ifElseNode);
  config.addNodeType(switchCaseNode);
};

export const resolveConditionsNodes = {
  if_else: resolveIfElseNode,
  switch_case: resolveSwitchCaseNode,
};
