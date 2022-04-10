import React, { useRef } from "react";
import styles from "./TextInput.css";

const NumberInput = ({ placeholder, onChange, data, step, validate }) => {
  const numberInput = useRef();

  const preventPropagation = (e) => e.stopPropagation();

  const parseNumber = ({ target, type }) => {
    if (validate(target.value)) {
      const inputValue = target.value
        .replace(",", ".")
        .replace(/[^0-9.]+/g, "");

      if (!inputValue) return onChange(null);

      const value = parseFloat(inputValue, 10);

      if (Number.isNaN(value)) {
        if (type === "blur") numberInput.current.value = data;
      } else {
        onChange((numberInput.current.value = value));
      }
    } else if (type === "blur") numberInput.current.value = data;
  };

  return (
    <div className={styles.wrapper}>
      <input
        onKeyDown={(e) => {
          if (e.keyCode === 69) {
            e.preventDefault();
            return false;
          }
        }}
        onChange={parseNumber}
        onBlur={parseNumber}
        step={step || "1"}
        onDragStart={preventPropagation}
        onMouseDown={preventPropagation}
        type="number"
        placeholder={placeholder}
        className={styles.input}
        value={data || ""}
        ref={numberInput}
      />
    </div>
  );
};

export default NumberInput;
