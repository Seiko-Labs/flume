import React, { forwardRef, useEffect, useRef } from "react";
import { memo } from "react";
import { XYPanZoom } from "@xyflow/system";
import { useNodesAPI } from "../../store";

const Stage = ({ children }) => {
  const wrapper = useRef();
  const { transform, onViewportChange, setStage } = useNodesAPI();

  const [transformX, transformY, scale] = transform;

  const panZoom = useRef();

  useEffect(() => {
    if (!wrapper.current) return;

    setStage(wrapper.current);

    panZoom.current = XYPanZoom({
      domNode: wrapper.current,
      minZoom: 0.1,
      maxZoom: 2,
      translateExtent: [
        [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
        [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
      ],
      viewport: { x: transformX, y: transformY, zoom: scale },
      onTransformChange: onViewportChange,
      onDraggingChange: console.log,
    });
  }, []);

  useEffect(() => {
    panZoom.current?.update({
      zoomOnScroll: true,
      zoomOnPinch: true,
      panOnScroll: true,
      zoomOnDoubleClick: true,
      panOnDrag: true,
      zoomActivationKeyPressed: true,
      preventScrolling: true,
      noDragClassName: "nodrag",
      noWheelClassName: "nowheel",
      noPanClassName: "nopan",
    });
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        background: "rgba(0, 0, 0, 0.2)",
      }}
      ref={wrapper}
    >
      <div
        style={{
          transform: `translate3d(${transformX}px, ${transformY}px, 0px) scale3d(${scale}, ${scale}, ${scale})`,
          transformOrigin: "0 0",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

Stage.displayName = "Stage";

export default memo(Stage);
