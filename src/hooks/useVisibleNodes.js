import { useMemo } from "react";

export const getOverlappingArea = (rectA, rectB) => {
  const xOverlap = Math.max(
    0,
    Math.min(rectA.x + rectA.width, rectB.x + rectB.width) -
      Math.max(rectA.x, rectB.x)
  );
  const yOverlap = Math.max(
    0,
    Math.min(rectA.y + rectA.height, rectB.y + rectB.height) -
      Math.max(rectA.y, rectB.y)
  );

  return Math.ceil(xOverlap * yOverlap);
};

export const getScaledRect = (rect, tScale) => ({
  x: rect.x / tScale,
  y: rect.y / tScale,
  width: rect.width / tScale,
  height: rect.height / tScale,
});

export function useVisibleNodes({
  nodes,
  wrapperRect,
  transform: [tx, ty, tScale],
  selectedNodes,
}) {
  const visibleNodes = [];

  if (!wrapperRect) return visibleNodes;
  let i = 0;

  const rect = getScaledRect(
    {
      x: wrapperRect.x - tx,
      y: wrapperRect.y - ty,
      width: wrapperRect.width,
      height: wrapperRect.height,
    },
    tScale
  );

  for (const v of Object.values(nodes)) {
    const nodeRect = {
      x: v.x - wrapperRect.x,
      y: v.y - wrapperRect.y,
      width: 300,
      height: 300,
    };

    const overlappingArea = getOverlappingArea(rect, nodeRect);

    if (
      overlappingArea > 0 ||
      selectedNodes.find((ref) => ref.id === v.id) ||
      v.type === "start"
    ) {
      visibleNodes[i] = v;
      i++;
    }
  }

  return visibleNodes;
}
