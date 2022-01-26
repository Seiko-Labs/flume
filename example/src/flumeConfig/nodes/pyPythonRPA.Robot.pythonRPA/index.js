import { applyTimeConfig, resolveTimeNodes } from './time';
import { applyConditionsConfig, resolveConditionsNodes } from './conditions';
import { applyLoopsConfig, resolveLoopsNodes } from './loops';
import { applyMouseConfig, resolveMouseNodes } from './mouse';
import { applyKeyboardConfig, resolveKeyboardNodes } from './keyboard';
import { applyFileConfig, resolveFileNodes } from './file';

export const applyPythonRPAConfig = (config) => {
  applyTimeConfig(config);
  applyConditionsConfig(config);
  applyLoopsConfig(config);
  applyMouseConfig(config);
  applyKeyboardConfig(config);
  applyFileConfig(config);
};

export const resolvePythonRPANodes = {
  ...resolveTimeNodes,
  ...resolveConditionsNodes,
  ...resolveLoopsNodes,
  ...resolveMouseNodes,
  ...resolveKeyboardNodes,
  ...resolveFileNodes,
};
