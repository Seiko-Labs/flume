import { clickNode, clickNodeButtonPort, resolveClickNode } from "./click";
import { doubleClickNode, resolveDoubleClickNode } from "./doubleclick";
import { dragNode, resolveDragNode } from "./drag";
import { moveToNode, resolveMoveToNode } from "./move_to";
import { resolveScrollNode, scrollNode } from "./scroll";

export const applyMouseConfig = (config) => {
  config.addPortType(clickNodeButtonPort);
  config.addNodeType(clickNode);
  config.addNodeType(doubleClickNode);
  config.addNodeType(dragNode);
  config.addNodeType(moveToNode);
  config.addNodeType(scrollNode);
};

export const resolveMouseNodes = {
  click: resolveClickNode,
  double_click: resolveDoubleClickNode,
  drag: resolveDragNode,
  move_to: resolveMoveToNode,
  scroll: resolveScrollNode,
};
