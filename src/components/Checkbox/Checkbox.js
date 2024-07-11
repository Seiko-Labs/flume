import React, { useRef } from "react";
import styles from "./Checkbox.css";
import { ReactComponent as Ticker } from "./../../img/ok-tick.svg";
import { memo } from "react";

const Checkbox = ({ label, data, onChange }) => (
  <label className={styles.wrapper} title={label}>
    <input
      className={styles.checkbox}
      type="checkbox"
      value={data}
      checked={data}
      onChange={(e) => onChange(e.target.checked)}
    />
    <span className={styles.checkboxMark}>
      <Ticker />
    </span>
    {label}
  </label>
);

export default memo(Checkbox);
