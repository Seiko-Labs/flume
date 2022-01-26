import { forEachNode, resolveForEachNode } from './for_each';
import { breakLoopNode, resolveBreakLoopNode } from './break_loop';
import { forINode, resolveForINode } from './for_i';
import { loopWhileNode, resolveLoopWhileNode } from './loop_while';

export const applyLoopsConfig = (config) => {
  config.addNodeType(forEachNode);
  config.addNodeType(breakLoopNode);
  config.addNodeType(forINode);
  config.addNodeType(loopWhileNode);
};

export const resolveLoopsNodes = {
  for_each: resolveForEachNode,
  break_loop: resolveBreakLoopNode,
  for_i: resolveForINode,
  loop_while: resolveLoopWhileNode,
};
