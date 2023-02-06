import React from "react";
import usePrevious from "../../hooks/usePrevious";
import Control from "../Control/Control";
import styles from "./IoPorts.css";
import Port from "./Port";
import { memo } from 'react';

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
  nodeData,
}) => {
  const { label: defaultLabel, controls: defaultControls = [] } =
    inputTypes[type] || {};
  const controls = localControls || defaultControls;

  return (
    <tr
      data-controlless={noControls || !controls.length}
      data-is-inner={true}
      onDragStart={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <td className={styles.portLabel} title={label || defaultLabel}>
        {label || defaultLabel}
      </td>
      <td className={styles.controls}>
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
            nodeData={nodeData}
            isMonoControl={controls.length === 1}
          />
        ))}
      </td>
    </tr>
  );
};

export default memo(Inner);
