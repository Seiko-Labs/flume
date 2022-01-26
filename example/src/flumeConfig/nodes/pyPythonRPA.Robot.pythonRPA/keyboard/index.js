import { resolveWriteNode, writeNode } from './write';
import { pressNode, resolvePressNode } from './press';

export const applyKeyboardConfig = (config) => {
  config.addNodeType(writeNode);
  config.addNodeType(pressNode);
};

export const resolveKeyboardNodes = {
  write: resolveWriteNode,
  press: resolvePressNode,
};
