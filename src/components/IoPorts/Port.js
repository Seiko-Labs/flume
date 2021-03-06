import React, { useContext, useRef, useState } from "react";
import { Portal } from "react-portal";
import { calculateCurve, getPortRect } from "../../connectionCalculator";
import { DRAG_CONNECTION_ID, STAGE_ID } from "../../constants";
import {
  EditorIdContext,
  NodeDispatchContext,
  PortTypesContext,
  StageContext,
} from "../../context";
import Connection from "../Connection/Connection";
import styles from "./IoPorts.css";
import { ReactComponent as PortArrow } from "../../img/port-arrow.svg";

const Port = ({
  color,
  name = "",
  type,
  isInput,
  nodeId,
  triggerRecalculation,
}) => {
  const nodesDispatch = useContext(NodeDispatchContext);
  const stageState = useContext(StageContext);
  const editorId = useContext(EditorIdContext);
  const stageId = `${STAGE_ID}${editorId}`;
  const inputTypes = useContext(PortTypesContext);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartCoordinates, setDragStartCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const dragStartCoordinatesCache = useRef(dragStartCoordinates);
  const port = useRef();
  const line = useRef();
  const lineInToPort = useRef();

  const byScale = (value) => value / stageState.scale;

  const handleDrag = (e) => {
    const stage = document.getElementById(stageId).getBoundingClientRect();

    if (isInput) {
      const to = {
        x:
          byScale(e.clientX - stage.x - stage.width / 2) +
          stageState.translate.x,
        y:
          byScale(e.clientY - stage.y - stage.height / 2) +
          stageState.translate.y,
      };
      if (lineInToPort.current)
        lineInToPort.current.setAttribute(
          "d",
          calculateCurve(to, dragStartCoordinatesCache.current)
        );
      else
        line.current.setAttribute(
          "d",
          calculateCurve(dragStartCoordinatesCache.current, to)
        );
    } else {
      const to = {
        x:
          byScale(e.clientX - stage.x - stage.width / 2) +
          stageState.translate.x,
        y:
          byScale(e.clientY - stage.y - stage.height / 2) +
          stageState.translate.y,
      };
      line.current.setAttribute(
        "d",
        calculateCurve(to, dragStartCoordinatesCache.current)
      );
    }
  };

  // TODO: Refactor onDragEnd method (input -> output part)
  const handleDragEnd = (e) => {
    const droppedOnPort = !!e.target.dataset.portName;

    if (isInput && lineInToPort.current) {
      const { inputNodeId, inputPortName, outputNodeId, outputPortName } =
        lineInToPort.current.dataset;
      nodesDispatch({
        type: "REMOVE_CONNECTION",
        input: { nodeId: inputNodeId, portName: inputPortName },
        output: { nodeId: outputNodeId, portName: outputPortName },
      });
      if (droppedOnPort) {
        const {
          portName: connectToPortName,
          nodeId: connectToNodeId,
          portType: connectToPortType,
          portTransputType: connectToTransputType,
        } = e.target.dataset;
        const isNotSameNode = outputNodeId !== connectToNodeId;
        if (isNotSameNode && connectToTransputType !== "output") {
          const inputWillAcceptConnection =
            inputTypes[connectToPortType].acceptTypes.includes(type);
          if (inputWillAcceptConnection) {
            nodesDispatch({
              type: "ADD_CONNECTION",
              input: { nodeId: connectToNodeId, portName: connectToPortName },
              output: { nodeId: outputNodeId, portName: outputPortName },
            });
          }
        }
      }
    } else {
      if (droppedOnPort) {
        if (!isInput) {
          const {
            portName: inputPortName,
            nodeId: inputNodeId,
            portType: inputNodeType,
            portTransputType: inputTransputType,
          } = e.target.dataset;
          const isNotSameNode = inputNodeId !== nodeId;
          if (isNotSameNode && inputTransputType !== "output") {
            const inputWillAcceptConnection =
              inputTypes[inputNodeType].acceptTypes.includes(type);
            if (inputWillAcceptConnection) {
              nodesDispatch({
                type: "ADD_CONNECTION",
                output: { nodeId, portName: name },
                input: { nodeId: inputNodeId, portName: inputPortName },
              });
              triggerRecalculation();
            }
          }
        } else {
          const {
            portName: inputPortName,
            nodeId: inputNodeId,
            portType: inputNodeType,
            portTransputType: inputTransputType,
          } = e.target.dataset;
          const isNotSameNode = inputNodeId !== nodeId;
          if (isNotSameNode && inputTransputType === "output") {
            const inputWillAcceptConnection =
              inputTypes[inputNodeType].acceptTypes.includes(type);
            if (inputWillAcceptConnection) {
              nodesDispatch({
                type: "ADD_CONNECTION",
                output: { nodeId: inputNodeId, portName: inputPortName },
                input: { nodeId, portName: name },
              });
              triggerRecalculation();
            }
          }
        }
      }
    }

    setIsDragging(false);
    document.removeEventListener("mouseup", handleDragEnd);
    document.removeEventListener("mousemove", handleDrag);
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const startPort = port.current.getBoundingClientRect();
    const stage = document.getElementById(stageId).getBoundingClientRect();

    if (isInput) {
      lineInToPort.current = document.querySelector(
        `[data-input-node-id="${nodeId}"][data-input-port-name="${name}"]`
      );
      const portIsConnected = !!lineInToPort.current;
      if (portIsConnected) {
        lineInToPort.current.parentNode.style.zIndex = 9999;
        const outputPort = getPortRect(
          lineInToPort.current.dataset.outputNodeId,
          lineInToPort.current.dataset.outputPortName,
          "output"
        );
        const coordinates = {
          x:
            byScale(
              outputPort.x - stage.x + outputPort.width / 2 - stage.width / 2
            ) + stageState.translate.x,
          y:
            byScale(
              outputPort.y - stage.y + outputPort.width / 2 - stage.height / 2
            ) + stageState.translate.y,
        };
        setDragStartCoordinates(coordinates);
        dragStartCoordinatesCache.current = coordinates;
        setIsDragging(true);
        document.addEventListener("mouseup", handleDragEnd);
        document.addEventListener("mousemove", handleDrag);
      } else {
        const coordinates = {
          x:
            byScale(
              startPort.x - stage.x + startPort.width / 2 - stage.width / 2
            ) + stageState.translate.x,
          y:
            byScale(
              startPort.y - stage.y + startPort.width / 2 - stage.height / 2
            ) + stageState.translate.y,
        };
        setDragStartCoordinates(coordinates);
        dragStartCoordinatesCache.current = coordinates;
        setIsDragging(true);
        document.addEventListener("mouseup", handleDragEnd);
        document.addEventListener("mousemove", handleDrag);
      }
    } else {
      const coordinates = {
        x:
          byScale(
            startPort.x - stage.x + startPort.width / 2 - stage.width / 2
          ) + stageState.translate.x,
        y:
          byScale(
            startPort.y - stage.y + startPort.width / 2 - stage.height / 2
          ) + stageState.translate.y,
      };
      setDragStartCoordinates(coordinates);
      dragStartCoordinatesCache.current = coordinates;
      setIsDragging(true);
      document.addEventListener("mouseup", handleDragEnd);
      document.addEventListener("mousemove", handleDrag);
    }
  };

  return (
    <>
      <div
        onMouseDown={handleDragStart}
        className={styles.port}
        style={{
          zIndex: 999,
          marginLeft: isInput ? 0 : -9,
          backgroundColor: color,
        }}
        data-port-name={name}
        data-port-type={type}
        data-port-transput-type={isInput ? "input" : "output"}
        data-node-id={nodeId}
        onDragStart={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        ref={port}
      >
        <PortArrow />
      </div>
      {isDragging ? (
        <Portal
          node={document.getElementById(`${DRAG_CONNECTION_ID}${editorId}`)}
        >
          <Connection
            from={dragStartCoordinates}
            to={dragStartCoordinates}
            lineRef={line}
          />
        </Portal>
      ) : null}
    </>
  );
};

export default Port;
