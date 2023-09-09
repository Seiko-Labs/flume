import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./Stage.css";
import { Portal } from "react-portal";
import ContextMenu from "../ContextMenu/ContextMenu";
import { NodeTypesContext, NodeDispatchContext } from "../../context";
import orderBy from "lodash/orderBy";
import * as d3 from "d3-zoom";
import { select } from "d3-selection";
import { STAGE_ID } from "../../constants";
import { memo } from "react";
import useRaf from "@rooks/use-raf";

const getBoundsOfBoxes = (box1, box2) => ({
  x: Math.min(box1.x, box2.x),
  y: Math.min(box1.y, box2.y),
  x2: Math.max(box1.x2, box2.x2),
  y2: Math.max(box1.y2, box2.y2),
});
const rectToBox = ({ x, y, width, height }) => ({
  x,
  y,
  x2: x + width,
  y2: y + height,
});
export const boxToRect = ({ x, y, x2, y2 }) => ({
  x,
  y,
  width: x2 - x,
  height: y2 - y,
});
const getRectOfNodes = (nodes) => {
  if (nodes.length === 0) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }

  const box = nodes.reduce(
    (currBox, node) => {
      const { x, y } = node;
      return getBoundsOfBoxes(
        currBox,
        rectToBox({
          x,
          y,
          width: 100,
          height: 50,
        })
      );
    },
    { x: Infinity, y: Infinity, x2: -Infinity, y2: -Infinity }
  );

  return boxToRect(box);
};
const getBoundsOfRects = (rect1, rect2) =>
  boxToRect(getBoundsOfBoxes(rectToBox(rect1), rectToBox(rect2)));

let firstRender = true;
const defaultWidth = 200;
const defaultHeight = 150;
const Stage = forwardRef(
  (
    {
      scale,
      translate,
      editorId,
      dispatchStageState,
      children,
      nodes,
      spaceIsPressed,
      focusNode,
      onFocusChange,
    },
    wrapper
  ) => {
    const translateWrapper = useRef();

    const svg = useRef();
    const rect = useRef();
    const elementWidth = defaultWidth;
    const elementHeight = defaultHeight;
    const size = wrapper.current
      ? {
          width: wrapper.current.getBoundingClientRect().width,
          height: wrapper.current.getBoundingClientRect().height,
        }
      : { width: 0, height: 0 };

    const [viewBB, setViewBB] = useState({
      x: -translate.x / scale,
      y: -translate.y / scale,
      width: size.width / scale,
      height: size.height / scale,
    });
    const offsetScale = 5;

    const boundingRect =
      Object.values(nodes).length > 0
        ? getBoundsOfRects(getRectOfNodes(Object.values(nodes)), viewBB)
        : viewBB;
    const scaledWidth = boundingRect.width / elementWidth;
    const scaledHeight = boundingRect.height / elementHeight;
    const viewScale = Math.max(scaledWidth, scaledHeight);
    const viewWidth = viewScale * elementWidth;
    const viewHeight = viewScale * elementHeight;
    const offset = offsetScale * viewScale;
    const x = boundingRect.x - (viewWidth - boundingRect.width) / 2 - offset;
    const y = boundingRect.y - (viewHeight - boundingRect.height) / 2 - offset;
    const width = viewWidth + offset * 2;
    const height = viewHeight + offset * 2;
    const viewScaleRef = useRef(0);

    viewScaleRef.current = viewScale;

    useLayoutEffect(() => {
      if (!translateWrapper.current || !wrapper.current) return;
      const { x, y, k } = d3.zoomTransform(translateWrapper.current);
      const d3Zoom = d3.zoom().scaleExtent([0.3, 3]);
      const d3Selection = select(wrapper.current);
      const selection = select(svg.current);
      const zoomAndPanHandler = d3.zoom();
      if (x === 0 && y === 0 && k === 1) {
        firstRender = false;
        d3Zoom.transform(
          d3Selection,
          d3.zoomIdentity.translate(translate.x, translate.y).scale(scale)
        );
      } else {
        d3Zoom.transform(d3Selection, d3.zoomIdentity.translate(x, y).scale(k));
      }

      d3Zoom.filter((e) => {
        if (e.type === "mousedown") return spaceIsPressed ? e : false;
        return e;
      });

      d3Zoom.on("zoom", (event) => {
        const { x, y, k } = event.transform;

        setViewBB({
          x: -x / k,
          y: -y / k,
          width: size.width / k,
          height: size.height / k,
        });

        translateWrapper.current.style.transform = `translate3d(${x}px, ${y}px, 0px) scale3d(${k}, ${k}, ${k})`;
      });

      d3Zoom.on("end", (event) => {
        const { x, y, k } = event.transform;

        dispatchStageState(() => ({
          type: "SET",
          scale: event.transform.k,
          translate: {
            x: event.transform.x,
            y: event.transform.y,
          },
        }));
      });

      if (svg.current && rect.current) {
        zoomAndPanHandler
          .on("zoom", (event) => {
            const transform = translateWrapper.current.style.transform.match(
              /translate3d\((?<x>.*?)px, (?<y>.*?)px, (?<z>.*?)px/
            );
            const moveScale = viewScaleRef.current * Math.max(1, scale) * 1;
            const position = {
              x: transform[1] - event.sourceEvent.movementX * moveScale,
              y: transform[2] - event.sourceEvent.movementY * moveScale,
            };

            const nextTransform = d3.zoomIdentity
              .translate(position.x, position.y)
              .scale(scale);

            setViewBB({
              x:
                (-transform[1] - event.sourceEvent.movementX * moveScale) /
                scale,
              y:
                (-transform[2] - event.sourceEvent.movementY * moveScale) /
                scale,
              width: size.width / scale,
              height: size.height / scale,
            });

            translateWrapper.current.style.transform = `translate3d(${nextTransform.x}px, ${nextTransform.y}px, 0px) scale3d(${scale}, ${scale}, ${scale})`;
          })
          .on("end", (event) => {
            const transform = translateWrapper.current.style.transform.match(
              /translate3d\((?<x>.*?)px, (?<y>.*?)px, (?<z>.*?)px/
            );
            const moveScale = viewScaleRef.current * Math.max(1, scale) * 1;
            const position = {
              x: transform[1] - event.sourceEvent.movementX * moveScale,
              y: transform[2] - event.sourceEvent.movementY * moveScale,
            };

            const nextTransform = d3.zoomIdentity
              .translate(position.x, position.y)
              .scale(scale);

            d3Zoom.transform(d3Selection, nextTransform);

            dispatchStageState(() => ({
              type: "SET",
              scale,
              translate: {
                x: nextTransform.x,
                y: nextTransform.y,
              },
            }));
          });

        selection.call(zoomAndPanHandler);
      }

      if (focusNode && focusNode.node) {
        const node = Object.values(nodes).find(
          (node) => node.id === focusNode.node
        );

        const rect = {
          x: node.x,
          y: node.y,
          width: 300,
          height: 0,
        };

        d3Zoom.translateTo(d3Selection, rect.x, rect.y + 150);

        onFocusChange && onFocusChange(focusNode);
      }
      d3Selection.call(d3Zoom).on("dblclick.zoom", null);

      return () => {
        selection.on("zoom", null);
        selection.on("end", null);
        d3Zoom.on("zoom", null);
        d3Zoom.on("end", null);
        d3Zoom.on("start", null);
      };
    }, [spaceIsPressed, focusNode, scale]);

    console.log("im working ???");

    const nodeTypes = useContext(NodeTypesContext);
    const dispatchNodes = useContext(NodeDispatchContext);

    const [menuOpen, setMenuOpen] = useState(false);
    const [menuCoordinates, setMenuCoordinates] = useState({
      x: 0,
      y: 0,
    });

    const handleContextMenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setMenuCoordinates({ x: e.clientX, y: e.clientY });
      setMenuOpen(true);
      return false;
    };

    const closeContextMenu = () => {
      setMenuOpen(false);
    };

    const byScale = (value) => value / scale;

    const addNode = ({ node }) => {
      const snapGrid = [30, 30];

      const wrapperRect = wrapper.current.getBoundingClientRect();
      let x = byScale(menuCoordinates.x - wrapperRect.left - translate.x);
      let y = byScale(menuCoordinates.y - wrapperRect.top - translate.y);
      x = snapGrid[0] * Math.round(x / snapGrid[0]);
      y = snapGrid[1] * Math.round(y / snapGrid[1]);

      dispatchNodes({
        type: "ADD_NODE",
        x,
        y,
        nodeType: node.type,
      });
    };

    const menuOptions = useMemo(() => {
      const options = orderBy(
        Object.values(nodeTypes)
          .filter((node) => node.addable !== false)
          .map((node) => ({
            value: node.type,
            label: node.label,
            description: node.description,
            sortIndex: node.sortIndex,
            node,
          })),
        ["sortIndex", "label"]
      );

      return options;
    }, [nodeTypes]);

    return (
      <div
        id={`${STAGE_ID}${editorId}`}
        className={styles.wrapper}
        ref={wrapper}
        onContextMenu={handleContextMenu}
        onMouseDown={(e) => {
          document.activeElement.blur();
        }}
      >
        {menuOpen ? (
          <Portal>
            <ContextMenu
              x={menuCoordinates.x}
              y={menuCoordinates.y}
              options={menuOptions}
              onRequestClose={closeContextMenu}
              onOptionSelected={addNode}
              label="Add Node"
            />
          </Portal>
        ) : null}

        <div
          ref={translateWrapper}
          id="flume_translate_wrapper"
          style={{
            transform: `translate3d(${translate.x}px, ${translate.y}px, 0px) scale3d(${scale}, ${scale}, ${scale})`,
            transformOrigin: "0 0",
            width: "100%",
            height: "100%",
          }}
        >
          {children}
        </div>

        <svg
          width={elementWidth}
          height={elementHeight}
          viewBox={`${x} ${y} ${width} ${height}`}
          role="img"
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            margin: 15,
            borderRadius: 5,
            marginBottom: 45,
            background: "#192038",
            transformOrigin: "0 0",
          }}
          ref={svg}
        >
          {Object.values(nodes).map(({ x, y, ...node }) => {
            const nodeInfo = nodeTypes[node.type];
            return (
              <rect
                x={x}
                y={y}
                rx={10}
                ry={10}
                width={100}
                strokeWidth={1}
                stroke={"#192038"}
                height={50}
                fill={nodeInfo.category.tileBackground}
                shapeRendering={"crispEdges"}
              />
            );
          })}
          <path
            className="react-flow__minimap-mask"
            ref={rect}
            d={`M${x - offset},${y - offset}h${width + offset * 2}v${
              height + offset * 2
            }h${-width - offset * 2}z
        M${viewBB.x},${viewBB.y}h${viewBB.width}v${
              viewBB.height
            }h${-viewBB.width}z`}
            fill={"rgba(37, 47, 83, 0.5)"}
            rx={20}
            ry={20}
            style={{ borderRadius: 10 }}
            fillRule="evenodd"
            strokeWidth={1}
            pointerEvents="none"
            shapeRendering={"crispEdges"}
          />
        </svg>
      </div>
    );
  }
);

Stage.displayName = "Stage";

export default memo(Stage);
