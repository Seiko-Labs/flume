import React from "react";
import styles from "./IoPorts.css";
import Port from "./Port";

const Output = ({
  name,
  nodeId,
  type,
  inputTypes,
  triggerRecalculation,
  optColor,
  color: c,
}) => {
  const { color } = inputTypes[type];

  return (
    <div
      className={styles.transput}
      data-controlless={true}
      onDragStart={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Port
        type={type}
        name={name}
        color={color ?? c ?? optColor}
        nodeId={nodeId}
        triggerRecalculation={triggerRecalculation}
      />
    </div>
  );
};

export default Output;
