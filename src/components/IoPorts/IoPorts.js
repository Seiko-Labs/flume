import React, { useContext, useEffect } from "react";
import Inner from "./Inner";
import Input from "./Input";
import styles from "./IoPorts.css";
import { ConnectionRecalculateContext, PortTypesContext } from "../../context";
import Output from "./Output";
import { memo } from "react";

const IoPorts = ({
  nodeId,
  show = "innerOnly",
  resolvedInputs = [],
  resolvedOutputs = [],
  connections,
  color,
  inputData,
  updateNodeConnections,
  nodeData,
}) => {
  const inputTypes = useContext(PortTypesContext);
  const triggerRecalculation = useContext(ConnectionRecalculateContext);

  switch (show) {
    case "outputsOnly":
      return (
        (resolvedOutputs.length || null) && (
          <div className={styles.outputs} data-show={show}>
            {resolvedOutputs.map((output) => (
              <Output
                {...output}
                optColor={color}
                triggerRecalculation={triggerRecalculation}
                inputTypes={inputTypes}
                nodeId={nodeId}
                inputData={inputData}
                key={output.name}
              />
            ))}
          </div>
        )
      );
    case "inputsOnly":
      return (
        resolvedInputs.some(({ hidePort }) => !hidePort) && (
          <div className={styles.inputs} data-show={show}>
            {resolvedInputs
              .filter(({ hidePort }) => !hidePort)
              .map((input) => (
                <Input
                  optColor={color}
                  {...input}
                  data={inputData[input.name] || {}}
                  isConnected={!!connections.inputs[input.name]}
                  triggerRecalculation={triggerRecalculation}
                  updateNodeConnections={updateNodeConnections}
                  inputTypes={inputTypes}
                  nodeId={nodeId}
                  inputData={inputData}
                  key={input.name}
                />
              ))}
          </div>
        )
      );

    default:
      return (
        resolvedInputs.some(({ hidePort }) => hidePort) && (
          <div>
            {resolvedInputs
              .filter(({ hidePort }) => hidePort)
              .map((input) => (
                <Inner
                  {...input}
                  data={inputData[input.name] || {}}
                  isConnected={!!connections.inputs[input.name]}
                  triggerRecalculation={triggerRecalculation}
                  updateNodeConnections={updateNodeConnections}
                  inputTypes={inputTypes}
                  nodeId={nodeId}
                  inputData={inputData}
                  nodeData={nodeData}
                  key={input.name}
                />
              ))}
          </div>
        )
      );
  }
};

export default memo(IoPorts);
