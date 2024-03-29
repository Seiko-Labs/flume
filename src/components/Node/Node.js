import React, {
  forwardRef,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useTransputs from "../../hooks/useTransputs";
import styles from "./Node.css";
import {
  ConnectionRecalculateContext,
  NodeDispatchContext,
  NodeTypesContext,
  StageContext,
} from "../../context";
import { calculateCurve, getPortRect } from "../../connectionCalculator";
import { Portal } from "react-portal";
import ContextMenu from "../ContextMenu/ContextMenu";
import IoPorts from "../IoPorts/IoPorts";
import Draggable from "../Draggable/Draggable";
import { ReactComponent as Ticker } from "../../img/arrow.svg";
import { ReactComponent as CommentIcon } from "../../img/comment.svg";
import { ReactComponent as HelpIcon } from "../../img/help.svg";

import { memo } from "react";

const Comment = ({ onOutsideClick, onChange, value, border }) => {
  const ref = useRef();
  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onChange(ref.current.value);
      onOutsideClick && onOutsideClick(e);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <textarea
      ref={ref}
      defaultValue={value}
      onMouseDown={(e) => e.stopPropagation()}
      onDrag={(e) => e.stopPropagation()}
      onScroll={(e) => e.stopPropagation()}
      style={{
        lineHeight: 1.5,
        resize: "both",
        position: "absolute",
        outline: 0,
        border: `1px solid ${border}`,
        zIndex: 1000,
        padding: 5,
        borderRadius: "5px",
        background: "rgba(46, 58, 89, 1)",
      }}
    />
  );
};

const Node = forwardRef(
  (
    {
      id,
      x,
      y,
      isSelected,
      comment,
      expanded,
      stageRect,
      connections,
      type,
      inputData,
      onDragStart,
      onDragEnd,
      onDragHandle,
      hideControls,
    },
    nodeWrapper
  ) => {
    const [commentVisibile, toggleCommentVisibility] = useState(false);
    const nodeTypes = useContext(NodeTypesContext);
    const nodesDispatch = useContext(NodeDispatchContext);
    const stageState = useContext(StageContext);
    const recalculateConnections = useContext(ConnectionRecalculateContext);
    const {
      label,
      deletable,
      inputs = [],
      outputs = [],
      icon,
      description,
      category: {
        tileFontColor = "#B3B3B3",
        tileBackground = "rgba(89, 89, 102, 0.9)",
      },
    } = nodeTypes[type];

    const [menuOpen, setMenuOpen] = useState(false);
    const [menuCoordinates, setMenuCoordinates] = useState({ x: 0, y: 0 });
    const resolvedInputs = useTransputs(
      inputs,
      "input",
      id,
      inputData,
      connections
    );

    const resolvedOutputs = useTransputs(
      outputs,
      "output",
      id,
      inputData,
      connections
    );

    const nodeData = {
      label,
      id,
      icon,
      description,
      tileFontColor,
      tileBackground,
    };

    const byScale = (value) => value / stageState.scale;
    const last = useRef({ x: 0, y: 0 });

    const updateConnectionsByTransput = (transput = {}, isOutput) => {
      Object.entries(transput).forEach(([portName, outputs]) => {
        outputs.forEach((output) => {
          if (stageRect.current) {
            const toRect = getPortRect(
              id,
              portName,
              isOutput ? "output" : "input"
            );

            if (!toRect) return;
            const portHalf = toRect.width / 2;
            let combined;
            if (isOutput) {
              combined = id + portName + output.nodeId + output.portName;
            } else {
              combined = output.nodeId + output.portName + id + portName;
            }

            let cnx = document.querySelector(
              `[data-connection-id="${combined}"]`
            );

            if (!cnx) return;

            const from = {
              x: byScale(
                toRect.x -
                  stageRect.current.x +
                  portHalf -
                  stageState.translate.x
              ),
              y: byScale(
                toRect.y -
                  stageRect.current.y +
                  portHalf -
                  stageState.translate.y
              ),
            };

            const to = isOutput
              ? cnx.getPointAtLength(0)
              : cnx.getPointAtLength(cnx.getTotalLength());

            cnx.setAttribute(
              "d",
              calculateCurve(...(isOutput ? [to, from] : [from, to]))
            );
          }
        });
      });
    };

    const updateNodeConnections = () => {
      if (connections) {
        updateConnectionsByTransput(connections.inputs);
        updateConnectionsByTransput(connections.outputs, true);
      }
    };

    const handleDrag = ({ x, y }) => {
      const nWrapper = document.getElementById(id);
      const oldPositions = nWrapper.style.transform.match(
        /^translate\((-?[0-9\\.]+)px, ?(-?[0-9\\.]+)px\);?/
      );

      if (!nWrapper) return;

      nWrapper.style.transition = "0s";
      if (oldPositions?.length === 3) {
        onDragHandle(
          nWrapper.dataset.nodeId,
          x - Number(oldPositions[1]),
          y - Number(oldPositions[2]),
          { x, y }
        );
      }

      nWrapper.style.transform = `translate(${x}px,${y}px)`;

      updateNodeConnections();
    };

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

    const handleMenuOption = ({ value }) => {
      switch (value) {
        case "deleteNode":
          nodesDispatch({
            type: "REMOVE_NODE",
            nodeId: id,
          });
          break;
        default:
          return;
      }
    };

    const hasInner = useMemo(
      () => !!resolvedInputs?.some?.(({ hidePort }) => hidePort),
      [resolvedInputs]
    );

    return (
      <Draggable
        className={styles?.wrapper}
        style={{
          background: "rgba(46, 58, 89)",
          color: tileFontColor,
          zIndex: isSelected && 1000,
          boxShadow: isSelected
            ? `0 0 0 ${2 / stageState.scale}px ${tileBackground}`
            : "none",
          transform: `translate(${x}px, ${y}px)`,
        }}
        onDragStart={onDragStart}
        onDrag={handleDrag}
        onDragEnd={(e, { x, y }) => {
          const nWrapper = document.getElementById(id);
          const oldPositions = nWrapper.style.transform.match(
            /^translate\((-?[0-9\\.]+)px, ?(-?[0-9\\.]+)px\);?/
          );

          if (!nWrapper) return;

          nWrapper.style.transition = "0s";
          if (oldPositions?.length === 3) {
            onDragEnd(
              nWrapper.dataset.nodeId,
              x - Number(oldPositions[1]),
              y - Number(oldPositions[2]),
              { x, y }
            );
          }
        }}
        innerRef={nodeWrapper}
        data-node-id={id}
        onContextMenu={handleContextMenu}
        stageState={stageState}
        stageRect={stageRect}
        id={id}
      >
        <IoPorts
          nodeId={id}
          resolvedOutputs={resolvedOutputs}
          show="outputsOnly"
          color={tileBackground}
          connections={connections}
          updateNodeConnections={updateNodeConnections}
          inputData={inputData}
        />
        <div className={styles?.body} id="in_body">
          <div className={styles?.header}>
            <div className={styles?.headerMeta}>
              <span
                className={styles?.id}
                onClick={() => navigator.clipboard.writeText(`{%${id}%}`)}
              >
                ID: {id}
              </span>
              <span
                title={description}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginRight: 5,
                }}
              >
                <HelpIcon />
              </span>
            </div>
            <div
              className={styles.nodeInfo}
              style={{
                backgroundColor: tileBackground,
              }}
            >
              {!hideControls && hasInner && (
                <Ticker
                  onClick={() => {
                    nodesDispatch({ type: "TOGGLE_NODE_VIEW", id });
                    recalculateConnections();
                  }}
                  style={{
                    float: "left",
                    transform: expanded ? "none" : "rotate(-90deg)",
                    cursor: "pointer",
                    stroke: "#C5CEE0",
                  }}
                />
              )}

              {commentVisibile && (
                <Comment
                  border={tileBackground}
                  value={comment}
                  onOutsideClick={() => toggleCommentVisibility(false)}
                  onChange={(value) => {
                    nodesDispatch({ type: "COMMENT", id, value });
                  }}
                />
              )}
              <div
                className={styles?.title}
                style={{ color: "#fff", margin: "0 auto" }}
              >
                {icon && <img src={icon} />}
                <span
                  className={styles?.label}
                  style={{ color: "#fff", margin: "0 auto" }}
                >
                  {label}
                </span>
              </div>
              <CommentIcon
                onClick={() => toggleCommentVisibility(true)}
                style={{
                  float: "right",
                  cursor: "pointer",
                  stroke: "#C5CEE0",
                }}
              />
            </div>
          </div>
          {comment && (
            <div
              style={{
                fontSize: 10,
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 5,
                overflow: "hidden",
                wordWrap: "break-word",
                maxWidth: 250,

                borderRadius: 5,
                background: tileBackground.includes("rgba")
                  ? tileBackground
                  : tileBackground + "59",
                padding: 4,
              }}
            >
              <div style={{ visibility: hideControls ? "hidden" : "visible" }}>
                <b>Comment: </b>
                {comment}
              </div>
            </div>
          )}
          {expanded && hasInner ? (
            <>
              <div
                style={{
                  padding: "0 5px 5px 5px",
                  visibility: hideControls ? "hidden" : "visible",
                }}
              >
                <IoPorts
                  nodeId={id}
                  resolvedInputs={resolvedInputs}
                  show={"innerOnly"}
                  connections={connections}
                  nodeData={nodeData}
                  updateNodeConnections={updateNodeConnections}
                  inputData={inputData}
                />
              </div>
            </>
          ) : null}
        </div>
        <IoPorts
          nodeId={id}
          resolvedInputs={resolvedInputs}
          show={"inputsOnly"}
          color={tileBackground}
          connections={connections}
          updateNodeConnections={updateNodeConnections}
          inputData={inputData}
        />
        {menuOpen ? (
          <Portal>
            <ContextMenu
              x={menuCoordinates.x}
              y={menuCoordinates.y}
              options={[
                ...(deletable !== false
                  ? [
                      {
                        label: "Delete Node",
                        value: "deleteNode",
                        description:
                          "Deletes a node and all of its connections.",
                      },
                    ]
                  : []),
              ]}
              onRequestClose={closeContextMenu}
              onOptionSelected={handleMenuOption}
              hideFilter
              label="Node Options"
              emptyText="This node has no options."
            />
          </Portal>
        ) : null}
      </Draggable>
    );
  }
);

Node.displayName = "Node";

export default memo(Node);
