import React from "react";
import styles from "./TextInput.css";

const NumberInput = ({
  placeholder,
  onChange,
  transformer,
  predicate,
  data,
  step,
}) => {
  const numberInput = React.useRef();

  const preventPropagation = (e) => e.stopPropagation();

  return (
    <div className={styles.wrapper}>
      <input
        onKeyDown={(e) => {
          if (e.keyCode === 69) {
            e.preventDefault();
            return false;
          }
        }}
        onChange={(e) => {
          const inputValue = e.target.value.replace(/[^0-9.]+/g, "");
          if (inputValue) {
            const value = parseFloat(inputValue, 10);
            if (Number.isNaN(value)) {
              onChange(0);
            } else {
              onChange(value);
              numberInput.current.value = value;
            }
          }
        }}
        onBlur={(e) => {
          if (!e.target.value) {
            onChange(0);
            numberInput.current.value = 0;
          }
        }}
        step={step || "1"}
        onDragStart={preventPropagation}
        onMouseDown={preventPropagation}
        type="number"
        placeholder={placeholder}
        className={styles.input}
        defaultValue={data}
        ref={numberInput}
      />
    </div>
  );
};

export default NumberInput;
