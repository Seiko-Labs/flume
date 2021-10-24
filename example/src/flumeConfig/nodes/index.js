import {
  applyPythonRPAConfig,
  resolvePythonRPANodes,
} from "./pyPythonRPA.Robot.pythonRPA";
import { applyLogicNodesConfig } from "./logicNodes";

export const applyBaseConfig = (config) => {
  applyLogicNodesConfig(config);
  applyPythonRPAConfig(config);
};

export const resolveBaseNodes = {
  ...resolvePythonRPANodes,
};
