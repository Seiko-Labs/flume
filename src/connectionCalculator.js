import { curveBundle, line } from "d3-shape";
import styles from "./components/Connection/Connection.css";
import { CONNECTIONS_ID } from "./constants";

const getPort = (nodeId, portName, transputType = "input") =>
  document.querySelector(
    `[data-node-id="${nodeId}"] [data-port-name="${portName}"][data-port-transput-type="${transputType}"]`
  );

export const getPortRect = (
  nodeId,
  portName,
  transputType = "input",
  cache
) => {
  if (cache) {
    const portCacheName = nodeId + portName + transputType;
    const cachedPort = cache.current.ports[portCacheName];
    if (cachedPort) {
      return cachedPort.getBoundingClientRect();
    } else {
      const port = getPort(nodeId, portName, transputType);
      cache.current.ports[portCacheName] = port;
      return port && port.getBoundingClientRect();
    }
  } else {
    const port = getPort(nodeId, portName, transputType);
    return port && port.getBoundingClientRect();
  }
};

export const getPortRectsByNodes = (nodes, forEachConnection) =>
  Object.values(nodes).reduce((obj, node) => {
    if (node.connections && node.connections.inputs) {
      Object.entries(node.connections.inputs).forEach(
        ([inputName, outputs]) => {
          outputs.forEach((output) => {
            const toRect = getPortRect(node.id, inputName);
            const fromRect = getPortRect(
              output.nodeId,
              output.portName,
              "output"
            );
            if (forEachConnection) {
              forEachConnection({
                to: toRect,
                from: fromRect,
                name: output.nodeId + output.portName + node.id + inputName,
              });
            }
            obj[node.id + inputName] = toRect;
            obj[output.nodeId + output.portName] = fromRect;
          });
        }
      );
    }
    return obj;
  }, {});

export const calculateCurve = (from, to) => {
  const fFrom = from;
  const fTo = to;
  const deltaX = fTo.x - fFrom.x;
  const deltaY = fTo.y - fFrom.y;
  const xSlope = Math.min(
    deltaX > 0 ? Math.abs(deltaX) / 3 : Math.abs(deltaX) / 3 + 30,
    200
  );
  const ySlope = deltaX < 0 ? (deltaY < 10 ? 30 : -deltaY < 10 ? -30 : 0) : 0;

  return line().curve(
    curveBundle.beta(Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8 ? 0 : 0.75)
  )([
    [fFrom.x, fFrom.y],
    [fFrom.x + xSlope, fFrom.y - ySlope],
    [fTo.x - xSlope, fTo.y + ySlope],
    [fTo.x, fTo.y],
  ]);
};

export const deleteConnection = ({ id }) => {
  const line = document.querySelector(`[data-connection-id="${id}"]`);
  if (line) line.parentNode.remove();
};

export const clearConnections = () => {
  const lines = document.querySelectorAll(
    `[data-output-node-id], [data-input-node-id]`
  );
  for (const line of lines) {
    line.parentNode.remove();
  }
};

export const deleteConnectionsByNodeId = (nodeId) => {
  const lines = document.querySelectorAll(
    `[data-output-node-id="${nodeId}"], [data-input-node-id="${nodeId}"]`
  );
  for (const line of lines) {
    line.parentNode.remove();
  }
};

export const updateConnection = ({ line, from, to }) => {
  line.setAttribute("d", calculateCurve(from, to));
};

export const createSVG = ({
  from,
  to,
  stage,
  id,
  outputNodeId,
  outputPortName,
  inputNodeId,
  inputPortName,
  stroke,
}) => {
  console.log(from, to);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", styles.svg);
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const curve = calculateCurve(from, to);
  path.setAttribute("d", curve);
  path.setAttribute("stroke", stroke);
  // path.setAttribute("stroke-opacity", ".3");
  path.setAttribute("stroke-width", "1.5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("fill", "none");
  path.setAttribute("data-connection-id", id);
  path.setAttribute("data-output-node-id", outputNodeId);
  path.setAttribute("data-output-port-name", outputPortName);
  path.setAttribute("data-input-node-id", inputNodeId);
  path.setAttribute("data-input-port-name", inputPortName);
  svg.appendChild(path);
  stage.appendChild(svg);
  return svg;
};

export const getStageRef = (editorId) =>
  document.getElementById(`${CONNECTIONS_ID}${editorId}`);

export const createConnections = (
  nodes,
  nodeTypes,
  stageRef,
  { x, y, zoom }
) => {
  const stage = stageRef.getBoundingClientRect();
  const stageHalfWidth = stage.width / 2;
  const stageHalfHeight = stage.height / 2;

  const byScale = (value) => value;

  nodes.forEach((node) => {
    if (node.connections && node.connections.inputs) {
      Object.entries(node.connections.inputs).forEach(
        ([inputName, outputs], k) => {
          outputs.forEach((output) => {
            const nodeInfo = nodeTypes[node.type];

            const fromPort = getPortRect(
              output.nodeId,
              output.portName,
              "output"
            );
            const portHalf = fromPort ? fromPort.width / 2 : 10;
            const toPort = getPortRect(node.id, inputName, "input");
            const id = output.nodeId + output.portName + node.id + inputName;
            const existingLine = document.querySelector(
              `[data-connection-id="${id}"]`
            );

            if (existingLine) {
              if (nodeInfo) {
                existingLine.setAttribute(
                  "stroke",
                  `${
                    inputName === "errorAction"
                      ? `${
                          inputName === "errorAction"
                            ? "#F16969"
                            : nodeInfo.category.tileBackground || "white"
                        }`
                      : nodeInfo.category.tileBackground || "white"
                  }`
                );
              }
              updateConnection({
                line: existingLine,
                to: fromPort
                  ? {
                      x: byScale(fromPort.x),
                      y: byScale(fromPort.y),
                    }
                  : existingLine.getPointAtLength(
                      existingLine.getTotalLength()
                    ),
                from: toPort
                  ? {
                      x: byScale(toPort.x),
                      y: byScale(toPort.y),
                    }
                  : existingLine.getPointAtLength(0),
              });
            } else {
              if (!fromPort || !toPort) return;

              const svg = createSVG({
                id,
                outputNodeId: output.nodeId,
                outputPortName: output.portName,
                inputNodeId: node.id,
                inputPortName: inputName,
                stroke: `${
                  inputName === "errorAction"
                    ? `${
                        inputName === "errorAction"
                          ? "#F16969"
                          : nodeInfo?.category?.tileBackground || "white"
                      }`
                    : nodeInfo?.category?.tileBackground || "white"
                }`,
                to: {
                  x: byScale(fromPort.x),
                  y: byScale(fromPort.y),
                },
                from: {
                  x: byScale(toPort.x),
                  y: byScale(toPort.y),
                },
                stage: stageRef,
              });
            }
          });
        }
      );
    }
  });
};
