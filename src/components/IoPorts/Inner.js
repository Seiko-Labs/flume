import React from "react";
import usePrevious from "../../hooks/usePrevious";
import Control from "../Control/Control";
import styles from "./IoPorts.css";
import Port from "./Port";

const Inner = ({
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
  inputData,
}) => {
  const { label: defaultLabel, controls: defaultControls = [] } =
    inputTypes[type] || {};
  const controls = localControls || defaultControls;

  return (
    <div
      className={styles.transput}
      data-controlless={noControls || !controls.length}
      onDragStart={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <label className={styles.portLabel}>{label || defaultLabel}</label>
      <div className={styles.controls}>
        {controls.map((control) => (
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
        ))}
      </div>
    </div>
  );
};

export default Inner;
