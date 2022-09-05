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
    },
    wrapper
  ) => {
    const [wheelPressed, setWheelPressed] = useState(false);
    useEffect(() => {
      const d3Zoom = d3.zoom().scaleExtent([0.1, 2]);
      const d3Selection = select(wrapper.current).call(d3Zoom);

      d3Zoom.on("zoom", (event) => {
        const delta = event.sourceEvent.deltaY;

        translateWrapper.current.style.transform =
          "translate(" +
          event.transform.x +
          "px," +
          event.transform.y +
          "px) scale(" +
          event.transform.k +
          ")";
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
        if (numNodes > 0) {
          const delta = event.sourceEvent.deltaY;
        }
      });
    }, []);
    const nodeTypes = useContext(NodeTypesContext);
    const dispatchNodes = useContext(NodeDispatchContext);
    const translateWrapper = useRef();
    const scaleWrapper = useRef();
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuCoordinates, setMenuCoordinates] = useState({
      x: 0,
      y: 0,
    });
    const dragData = useRef({ x: 0, y: 0 });
    const [spaceIsPressed, setSpaceIsPressed] = useState(false);

    const setStageRect = useCallback(() => {
      stageRef.current = wrapper.current.getBoundingClientRect();
    }, []);

    useEffect(() => {
      stageRef.current = wrapper.current.getBoundingClientRect();
      window.addEventListener("resize", setStageRect);
      return () => {
        window.removeEventListener("resize", setStageRect);
      };
    }, [stageRef, setStageRect]);

    // useEffect(() => {
    //   if (DRAGGABLE_CANVAS) {
    //     parentSetSpaceIsPressed(true);
    //     setSpaceIsPressed(true);
    //   } else {
    //     parentSetSpaceIsPressed(false);
    //     setSpaceIsPressed(false);
    //   }
    // }, [DRAGGABLE_CANVAS]);

    // const handleWheel = useCallback(
    //   (e) => {
    //     if (e.target.nodeName === "TEXTAREA" || e.target.dataset.comment) {
    //       if (e.target.clientHeight < e.target.scrollHeight) return;
    //     }
    //     e.preventDefault();
    //     if (numNodes > 0) {
    //       const delta = e.deltaY;
    // dispatchStageState(({ scale }) => ({
    //   type: "SET_SCALE",
    //   scale: clamp(scale - clamp(delta, -10, 10) * 0.005, 0.1, 2),
    // }));
    //     }
    //   },
    //   [dispatchStageState, numNodes]
    // );

    const handleContextMenu = (e) => {
      e.preventDefault();
      event.stopPropagation();
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

    const handleMouseEnter = () => {
      wrapper.current.focus();
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
      <Draggable
        id={`${STAGE_ID}${editorId}`}
        className={styles.wrapper}
        innerRef={wrapper}
        onContextMenu={handleContextMenu}
        tabIndex={-1}
        stageState={{ scale, translate }}
        style={{
          cursor: spaceIsPressed && spaceToPan ? "grab" : "",
        }}
        disabled={disablePan || (spaceToPan && !spaceIsPressed)}
        data-flume-stage={true}
      >
        {spaceIsPressed ? <Portal></Portal> : null}
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
        <div ref={scaleWrapper}>
          <div
            ref={translateWrapper}
            style={{
              transformOrigin: "0 0",
            }}
          >
            {children}
          </div>
        </div>
        {outerStageChildren}
      </Draggable>
    );
  }
);

Stage.displayName = "Stage";

export default Stage;
