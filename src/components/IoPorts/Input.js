import React from "react";
import usePrevious from "../../hooks/usePrevious";
import Control from "../Control/Control";
import styles from "./IoPorts.css";
import Port from "./Port";

const Input = ({
                 type,
                 label,
                 name,
                 nodeId,
                 data,
                 controls: localControls,
                 inputTypes,
                 noControls,
                 triggerRecalculation,
                 updateNodeConnections,
                 isConnected,
                 inputData,
                 hidePort,
               }) => {
  const {label: defaultLabel, color, controls: defaultControls = []} =
  inputTypes[type] || {};
  const prevConnected = usePrevious(isConnected);

  const controls = localControls || defaultControls;

  React.useEffect(() => {
    if (isConnected !== prevConnected) {
      triggerRecalculation();
    }
  }, [isConnected, prevConnected, triggerRecalculation]);

  return (
    <div
      className={styles.transput}
      data-controlless={isConnected || noControls || !controls.length}
      onDragStart={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {(!controls.length || noControls || isConnected) && (
        <label className={styles.portLabel}>{label || defaultLabel}</label>
      )}
      {!noControls && !isConnected
        ? (
          <div className={styles.controls}>
            {
              controls.map(control => (
                <Control
                  {...control}
                  nodeId={nodeId}
                  portName={name}
                  triggerRecalculation={triggerRecalculation}
                  updateNodeConnections={updateNodeConnections}
                  inputLabel={label}
                  data={data[control.name]}
                  allData={data}
                  key={control.name}
                  inputData={inputData}
                  isMonoControl={controls.length === 1}
                />
              ))
            }
          </div>
        )
        : null}
      {!hidePort ? (
        <Port
          type={type}
          color={color}
          name={name}
          nodeId={nodeId}
          isInput
          triggerRecalculation={triggerRecalculation}
        />
      ) : null}
    </div>
  );
};

export default Input
