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
import { memo } from "react";
import { useNodesAPI } from "../../store";
import { getConfig } from "@testing-library/dom";

const Port = ({
  color,
  name = "",
  type,
  isInput,
  nodeId,
  triggerRecalculation,
}) => {
  const { transform, addConnection } = useNodesAPI();

  const [x, y, zoom] = transform;

  const nodesDispatch = useContext(NodeDispatchContext);
  const editorId = useContext(EditorIdContext);
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

  const byScale = (value) => value / zoom;

  const getCords = (ev) => ({
    x: byScale(ev.clientX - x),
    y: byScale(ev.clientY - y),
  });

  const handleDrag = (e) => {
    if (!line.current) return;

    const to = getCords(e);
    if (isInput) {
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
      line.current.setAttribute(
        "d",
        calculateCurve(to, dragStartCoordinatesCache.current)
      );
    }
  };

  // TODO: Refactor onDragEnd method (input -> output part)
  const handleDragEnd = (e) => {
    const droppedOnPort = !!e.target.dataset.portName;
    console.log(droppedOnPort, e.target.dataset.portName);

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
            addConnection({
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
              addConnection({
                output: { nodeId, portName: name },
                input: { nodeId: inputNodeId, portName: inputPortName },
              });
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
              addConnection({
                output: { nodeId: inputNodeId, portName: inputPortName },
                input: { nodeId, portName: name },
              });
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
    e.stopPropagation();
    const startPort = port.current.getBoundingClientRect();

    if (isInput) {
      lineInToPort.current = document.querySelector(
        `[data-input-node-id="${nodeId}"][data-input-port-name="${name}"]`
      );
      const portIsConnected = !!lineInToPort.current;
      if (portIsConnected) {
        lineInToPort.current.parentNode.style.zIndex = 9999;

        const coordinates = lineInToPort.current.getPointAtLength(
          lineInToPort.current.getTotalLength()
        );
        setDragStartCoordinates(coordinates);
        dragStartCoordinatesCache.current = coordinates;
        setIsDragging(true);
        document.addEventListener("mouseup", handleDragEnd);
        document.addEventListener("mousemove", handleDrag);
      } else {
        const coordinates = {
          x: byScale(startPort.x - x + startPort.width / 2),
          y: byScale(startPort.y - y + startPort.width / 2),
        };
        setDragStartCoordinates(coordinates);
        dragStartCoordinatesCache.current = coordinates;
        setIsDragging(true);
        document.addEventListener("mouseup", handleDragEnd);
        document.addEventListener("mousemove", handleDrag);
      }
    } else {
      const coordinates = {
        x: byScale(startPort.x - x + startPort.width / 2),
        y: byScale(startPort.y - y + startPort.width / 2),
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
          marginLeft: isInput ? "40%" : -4,
          backgroundColor: name === "errorAction" ? "#F16969" : "grey",
          border: `2px solid white`,
          borderRadius: "100%",
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
      />
      {isDragging ? (
        <Portal
          node={document.getElementById(`${DRAG_CONNECTION_ID}${editorId}`)}
        >
          <Connection
            color={color}
            from={dragStartCoordinates}
            to={dragStartCoordinates}
            lineRef={line}
          />
        </Portal>
      ) : null}
    </>
  );
};

export default memo(Port);
