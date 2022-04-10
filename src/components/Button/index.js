import styles from "./index.css";
import React from "react";

const Button = ({ onPress, label }) => (
  <div className={styles.wrapper}>
    <button className={styles.button} title={label} onClick={onPress}>
      {label}
    </button>
  </div>
);

export default Button;
