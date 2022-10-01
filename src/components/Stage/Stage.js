import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./Stage.css";
import { Portal } from "react-portal";
import ContextMenu from "../ContextMenu/ContextMenu";
import { NodeTypesContext, NodeDispatchContext } from "../../context";
import Draggable from "../Draggable/Draggable";
import orderBy from "lodash/orderBy";
import clamp from "lodash/clamp";
import * as d3 from "d3-zoom";
import { select } from "d3-selection";
import { STAGE_ID } from "../../constants";

const Stage = forwardRef(
  (
    {
      scale,
      translate,
      editorId,
      dispatchStageState,
      children,
      outerStageChildren,
      numNodes,
      stageRef,
      spaceToPan,
      dispatchComments,
      disableComments,
      disablePan,
      disableZoom,
      toggleVisibility,
    },
    wrapper
  ) => {
    useEffect(() => {
      const d3Zoom = d3.zoom().scaleExtent([0.3, 3]);
      const d3Selection = select(wrapper.current).call(d3Zoom);
      d3Selection.on("mousedown.zoom", null);

      d3Zoom.on("zoom", (event) => {
        translateWrapper.current.style.transform =
          "translate(" +
          event.transform.x +
          "px," +
          event.transform.y +
          "px) scale(" +
          event.transform.k +
          ")";
      });
      d3Zoom.on("end", (event) => {
        dispatchStageState(({ translate: tran }) => ({
          type: "SET_TRANSLATE",
          translate: {
            x: event.transform.x,
            y: event.transform.y,
          },
        }));
        dispatchStageState(({ scale }) => ({
          type: "SET_SCALE",
          scale: event.transform.k,
        }));
        toggleVisibility();
      });
    }, []);
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
          style={{
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
