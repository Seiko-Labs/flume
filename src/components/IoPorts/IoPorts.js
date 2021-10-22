import React, { useMemo } from "react";
import Input from "./Input";
import styles from "./IoPorts.css";
import { ConnectionRecalculateContext, PortTypesContext } from "../../context";
import useTransputs from "../../hooks/useTransputs";
import Output from "./Output";

const IoPorts = ({
  nodeId,
  inputs = [],
  outputs = [],
  connections,
  expanded,
  inputData,
  updateNodeConnections,
  countOptionals,
}) => {
  const inputTypes = React.useContext(PortTypesContext);
  const triggerRecalculation = React.useContext(ConnectionRecalculateContext);
  const resolvedInputs = useTransputs(
    inputs,
    "input",
    nodeId,
    inputData,
    connections
  );
  const resolvedOutputs = useTransputs(
    outputs,
    "output",
    nodeId,
    inputData,
    connections
  );

  useMemo(() => {
    countOptionals &&
      resolvedInputs &&
      countOptionals(resolvedInputs.filter(({ optional }) => optional).length);
  }, [resolvedInputs, countOptionals]);

  return (
    <div className={styles.wrapper}>
      {resolvedInputs.some(({ optional }) => !optional) && (
        <div className={styles.inputs}>
          {resolvedInputs
            .filter(({ optional }) => !optional)
            .map((input) => (
              <Input
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
      )}
      {!!resolvedOutputs.length && (
        <div className={styles.outputs}>
          {resolvedOutputs.map((output) => (
            <Output
              {...output}
              triggerRecalculation={triggerRecalculation}
              inputTypes={inputTypes}
              nodeId={nodeId}
              inputData={inputData}
              portOnRight
              key={output.name}
            />
          ))}
        </div>
      )}
      {resolvedInputs.some(({ optional }) => optional) && (
        <div
          className={`${styles.inputs} ${!expanded ? styles.collapsed : ""}`}
        >
          {resolvedInputs
            .filter(({ optional }) => optional)
            .map((input) => (
              <Input
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
      )}
    </div>
  );
};

export default IoPorts;
