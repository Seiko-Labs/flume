import React, { useEffect } from "react";
import usePrevious from "../../hooks/usePrevious";
import styles from "./IoPorts.css";
import Port from "./Port";

const Input = ({
  type,
  name,
  nodeId,
  controls: localControls,
  inputTypes,
  noControls,
  triggerRecalculation,
  optColor,
  isConnected,
  color: c,
}) => {
  const {
    label: defaultLabel,
    color,
    controls: defaultControls = [],
  } = inputTypes[type];
  const prevConnected = usePrevious(isConnected);

  const controls = localControls || defaultControls;

  useEffect(() => {
    if (isConnected !== prevConnected) {
      triggerRecalculation();
    }
  }, [isConnected, prevConnected, triggerRecalculation]);

  return (
    <div
      className={styles.transput}
      data-controlless={isConnected || noControls || !controls.length}
      onDragStart={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Port
        type={type}
        color={color ?? c ?? optColor}
        name={name}
        nodeId={nodeId}
        isInput
        triggerRecalculation={triggerRecalculation}
      />
    </div>
  );
};

export default Input;
