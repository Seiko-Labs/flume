import React, { useRef } from "react";
import styles from "./TextInput.css";

const NumberInput = ({ placeholder, onChange, data, step, validate }) => {
  const numberInput = useRef();

  const preventPropagation = (e) => e.stopPropagation();

  const parseNumber = ({ target, type }) => {
    // const inputValue = target.value.replace(",", ".").replace(/[^0-9.]+/g, "");

    // if (!inputValue) return onChange(null);

    // const value = parseFloat(inputValue, 10);

    if (Number.isNaN(+target.value) || target.value === "") {
      onChange(target.value);
      // if (type === "blur") numberInput.current.value = data;
    } else {
      onChange(+target.value);
    }
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
        onDragStart={preventPropagation}
        onMouseDown={preventPropagation}
        className={styles.input}
        value={data}
        ref={numberInput}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default NumberInput;
