import { startRootNode } from "./start";
import { resolveSelectorNode, selectorNode, selectorPort } from "./selector";

export const applyLogicNodesConfig = (config) => {
  config.addPortType(selectorPort);
  config.addRootNodeType(startRootNode);
  config.addNodeType(selectorNode);
};

export const resolveLogicNodes = {
  selector: resolveSelectorNode,
};
