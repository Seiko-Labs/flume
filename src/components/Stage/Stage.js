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

let firstRender = true;

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
    useLayoutEffect(() => {
      const { x, y, k } = d3.zoomTransform(translateWrapper.current);
      const d3Zoom = d3.zoom().scaleExtent([0.3, 3]);
      const d3Selection = select(wrapper.current);
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

      d3Zoom.on("start", (event) => {
        dispatchStageState(() => ({
          type: "SET",
          scale: event.transform.k,
          translate: {
            x: event.transform.x,
            y: event.transform.y,
          },
        }));
      });

      d3Zoom.on("zoom", (event) => {
        requestAnimationFrame(() => {
          const { x, y, k } = event.transform;
          translateWrapper.current.style.transform = `translate3d(${x}px, ${y}px, 0px) scale3d(${k}, ${k}, ${k})`;
        });
      });

      d3Zoom.on("end", (event) => {
        dispatchStageState(() => ({
          type: "SET",
          scale: event.transform.k,
          translate: {
            x: event.transform.x,
            y: event.transform.y,
          },
        }));
      });

      if (focusNode && focusNode.node) {
        // translateWrapper.current.style.transition = "0.5s";
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
        d3Zoom.on("zoom", null);
        d3Zoom.on("end", null);
        d3Zoom.on("start", null);
      };
    }, [spaceIsPressed, focusNode]);

    const nodeTypes = useContext(NodeTypesContext);
    const dispatchNodes = useContext(NodeDispatchContext);
    const translateWrapper = useRef();

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
      const wrapperRect = wrapper.current.getBoundingClientRect();
      const x = byScale(menuCoordinates.x - wrapperRect.left - translate.x);
      const y = byScale(menuCoordinates.y - wrapperRect.top - translate.y);

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
            transition: "0.055s",
            transform: `translate3d(${translate.x}px, ${translate.y}px, 0px) scale3d(${scale}, ${scale}, ${scale})`,
            transformOrigin: "0 0",
          }}
        >
          {children}
        </div>
      </div>
    );
  }
);

Stage.displayName = "Stage";

export default memo(Stage);
