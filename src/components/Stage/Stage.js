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
      setSpaceIsPressed: parentSetSpaceIsPressed,
      numNodes,
      stageRef,
      spaceToPan,
      dispatchComments,
      disableComments,
      disablePan,
      disableZoom,
      DRAGGABLE_CANVAS,
      draggableCanvasSet,
    },
    wrapper
  ) => {
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

    useEffect(() => {
      if (DRAGGABLE_CANVAS) {
        parentSetSpaceIsPressed(true);
        setSpaceIsPressed(true);
      } else {
        parentSetSpaceIsPressed(false);
        setSpaceIsPressed(false);
      }
    }, [DRAGGABLE_CANVAS]);

    const handleWheel = useCallback(
      (e) => {
        if (e.target.nodeName === "TEXTAREA" || e.target.dataset.comment) {
          if (e.target.clientHeight < e.target.scrollHeight) return;
        }
        e.preventDefault();
        if (numNodes > 0) {
          const delta = e.deltaY;
          dispatchStageState(({ scale }) => ({
            type: "SET_SCALE",
            scale: clamp(scale - clamp(delta, -10, 10) * 0.005, 0.1, 2),
          }));
        }
      },
      [dispatchStageState, numNodes]
    );

    const handleDragDelayStart = (e) => {
      wrapper.current.focus();
    };

    const handleDragStart = (e) => {
      e.preventDefault();
      dragData.current = {
        x: e.clientX / scale,
        y: e.clientY / scale,
      };
    };

    const handleMouseDrag = (coords, e) => {
      const xDistance = dragData.current.x - e.clientX / scale;
      const yDistance = dragData.current.y - e.clientY / scale;

      wrapper.current.style.backgroundPosition = `calc(50% + ${
        (-(translate.x + xDistance) * scale) % (10 * scale)
      }px) calc(50% + ${
        (-(translate.y + yDistance) * scale) % (10 * scale)
      }px) `;

      translateWrapper.current.style.transform = `translate(${-(
        translate.x + xDistance
      )}px, ${-(translate.y + yDistance)}px)`;
    };

    const handleDragEnd = (e) => {
      const xDistance = dragData.current.x - e.clientX / scale;
      const yDistance = dragData.current.y - e.clientY / scale;
      dragData.current.x = e.clientX;
      dragData.current.y = e.clientY;
      dispatchStageState(({ translate: tran }) => ({
        type: "SET_TRANSLATE",
        translate: {
          x: tran.x + xDistance,
          y: tran.y + yDistance,
        },
      }));
    };

    const handleContextMenu = (e) => {
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
      const x =
        byScale(menuCoordinates.x - wrapperRect.x - wrapperRect.width / 2) +
        translate.x;
      const y =
        byScale(menuCoordinates.y - wrapperRect.y - wrapperRect.height / 2) +
        translate.y;
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

    const handleDocumentKeyUp = (e) => {
      if (e.which === 32) {
        setSpaceIsPressed(false);
        parentSetSpaceIsPressed(false);
        document.removeEventListener("keyup", handleDocumentKeyUp);
      }
    };

    const handleKeyDown = (e) => {
      if (e.which === 32) {
        parentSetSpaceIsPressed(true);
        setSpaceIsPressed(true);
        document.addEventListener("keyup", handleDocumentKeyUp);
      }
    };

    const handleMouseEnter = () => {
      wrapper.current.focus();
    };

    useEffect(() => {
      if (!disableZoom) {
        let stageWrapper = wrapper.current;
        stageWrapper.addEventListener("wheel", handleWheel);
        return () => {
          stageWrapper.removeEventListener("wheel", handleWheel);
        };
      }
    }, [handleWheel, disableZoom]);

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
        onMouseEnter={handleMouseEnter}
        onDragDelayStart={handleDragDelayStart}
        onDragStart={handleDragStart}
        onDrag={handleMouseDrag}
        onDragEnd={handleDragEnd}
        onKeyDown={handleKeyDown}
        onMouseDown={(e) => {
          if (e.button === 1) {
            if (!DRAGGABLE_CANVAS) {
              draggableCanvasSet &&
                typeof draggableCanvasSet === "function" &&
                draggableCanvasSet(true);
            } else {
              draggableCanvasSet &&
                typeof draggableCanvasSet === "function" &&
                draggableCanvasSet(false);
            }
          }
        }}
        onMouseUp={(e) => {
          // if (e.button === 1) {
          //   setSpaceIsPressed(false);
          //   parentSetSpaceIsPressed(false);
          // }
        }}
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
        <div
          ref={scaleWrapper}
          className={styles.scaleWrapper}
          style={{
            transformOrigin: "center",
            transform: `scale(${scale})`,
          }}
        >
          <div
            ref={translateWrapper}
            className={styles.transformWrapper}
            style={{
              transform: `translate(${-translate.x}px, ${-translate.y}px)`,
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
