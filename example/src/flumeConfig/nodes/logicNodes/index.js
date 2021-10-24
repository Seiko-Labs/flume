import { startRootNode } from "./start";

export const applyLogicNodesConfig = (config) => {
  config.addRootNodeType(startRootNode);
};
