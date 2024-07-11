import React from "react";
import { CONNECTIONS_ID } from "../../constants";
import styles from "./Connections.css";
import { memo } from "react";

const Connections = ({ nodes, editorId }) => {
  return (
    <div className={styles.svgWrapper} id={`${CONNECTIONS_ID}${editorId}`} />
  );
};

export default memo(Connections);
