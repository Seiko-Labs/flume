import React from "react";
import { calculateCurve } from "../../connectionCalculator";
import styles from "./Connection.css";
import { memo } from 'react';

const Connection = ({
  from,
  to,
  id,
  lineRef,
  outputNodeId,
  outputPortName,
  inputNodeId,
  inputPortName,
}) => {
  const curve = calculateCurve(from, to);
  return (
    <svg className={styles.svg}>
      <path
        data-connection-id={id}
        data-output-node-id={outputNodeId}
        data-output-port-name={outputPortName}
        data-input-node-id={inputNodeId}
        data-input-port-name={inputPortName}
        stroke="white"
        strokeOpacity={0.3}
        fill="none"
        strokeWidth={1}
        strokeLinecap="round"
        d={curve}
        ref={lineRef}
      />
    </svg>
  );
};

export default memo(Connection);
