import React from "react";
import styles from "./IoPorts.css";
import Port from "./Port";

const Output = ({
                  label,
                  name,
                  nodeId,
                  type,
                  inputTypes,
                  triggerRecalculation,
                }) => {
  const { label: defaultLabel, color } = inputTypes[type] || {};

  return (
    <div
      className={styles.transput}
      data-controlless={true}
      onDragStart={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Port
        type={type}
        name={name}
        color={color}
        nodeId={nodeId}
        triggerRecalculation={triggerRecalculation}
      />
      <label className={styles.portLabel}>{label || defaultLabel}</label>
    </div>
  );
};

export default Output
