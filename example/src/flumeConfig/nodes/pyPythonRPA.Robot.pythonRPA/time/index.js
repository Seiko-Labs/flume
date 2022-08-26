import { nowNode, resolveNowNode } from "./now";
import { delayNode, resolveDelayNode } from "./delay";

export const applyTimeConfig = (config) => {
  config.addNodeType(nowNode);
  config.addNodeType(delayNode);
};

export const resolveTimeNodes = {
  now: resolveNowNode,
  delay: resolveDelayNode,
};
