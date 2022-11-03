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
let firstRender = true;
const Stage = forwardRef(
  (
    {
      scale,
      translate,
      editorId,
      dispatchStageState,
      children,
      outerStageChildren,
      dispatchComments,
      disableComments,
      toggleVisibility,
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
          type: "SET_TRANSLATE",
          translate: {
            x: event.transform.x,
            y: event.transform.y,
          },
        }));
        dispatchStageState(() => ({
          type: "SET_SCALE",
          scale: event.transform.k,
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
          type: "SET_TRANSLATE",
          translate: {
            x: event.transform.x,
            y: event.transform.y,
          },
        }));
        dispatchStageState(() => ({
          type: "SET_SCALE",
          scale: event.transform.k,
        }));
        toggleVisibility();
      });

      if (focusNode) {
        translateWrapper.current.style.transition = "0.5s";
        const node = document.getElementById(focusNode);

        const rect = node.getBoundingClientRect();
        const wrapperRect = translateWrapper.current.getBoundingClientRect();

        const x = (rect.x - wrapperRect.x + rect.width / 2) / scale;
        const y = (rect.y - wrapperRect.y + rect.height) / scale;
        d3Zoom.translateTo(d3Selection, x, y);

        onFocusChange && onFocusChange(focusNode);

        translateWrapper.current.ontransitionend = () => {
          toggleVisibility();
          document.getElementById(focusNode).style.boxShadow = `0 0 0 ${
            2 / scale
          }px red`;
          setTimeout(() => {
            document.getElementById(focusNode).style.boxShadow = "none";
          }, 1000);
          translateWrapper.current.style.transition = "0.055s";

          translateWrapper.current.ontransitionend = null;
        };
      }
      d3Selection.call(d3Zoom).on("dblclick.zoom", null);

      return () => {
        d3Zoom.on("zoom", null);
        d3Zoom.on("end", null);
        d3Zoom.on("start", null);
      };
    }, [focusNode, spaceIsPressed]);

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

    const addNode = ({ node, internalType }) => {
      const wrapperRect = wrapper.current.getBoundingClientRect();
      const x = byScale(menuCoordinates.x - wrapperRect.left - translate.x);
      const y = byScale(menuCoordinates.y - wrapperRect.top - translate.y);
      if (internalType === "comment") {
        dispatchComments({
          type: "ADD_COMMENT",
          x,
          y,
        });
      } else {
        dispatchNodes({
          type: "ADD_NODE",
          x,
          y,
          nodeType: node.type,
        });
      }
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
      if (!disableComments) {
        options.push({
          value: "comment",
          label: "Comment",
          description: "A comment for documenting nodes",
          internalType: "comment",
        });
      }
      return options;
    }, [nodeTypes, disableComments]);

    return (
      <div
        id={`${STAGE_ID}${editorId}`}
        className={styles.wrapper}
        ref={wrapper}
        onContextMenu={handleContextMenu}
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
        {outerStageChildren}
      </div>
    );
  }
);

Stage.displayName = "Stage";

export default Stage;
