import React, { useContext } from "react";
import { ControllerOptionsContext } from "../../context";
import styles from "./TextInput.css";
import { memo } from "react";

const TextInput = ({ placeholder, onChange, data, nodeData }) => {
  const preventPropagation = (e) => e.stopPropagation();
  const { openEditor, isRightBarOpened } = useContext(ControllerOptionsContext);
  const value = [undefined, null].includes(data) ? "" : data;

  return (
    <div className={styles.wrapper}>
      <input
        onChange={({ target }) => {
          onChange(target.value);
        }}
        value={value}
        onDragStart={preventPropagation}
        onMouseDown={preventPropagation}
        onClick={(e) => {
          e.stopPropagation();
          if (isRightBarOpened && isRightBarOpened()) {
            openEditor(data, onChange, nodeData);
          }
        }}
        type="text"
        placeholder={placeholder}
        className={styles.input}
      />
      {openEditor && (
        <button
          className={styles.expander}
          onClick={() => {
            document.activeElement.blur();
            openEditor(data, onChange, nodeData);
          }}
        />
      )}
    </div>
  );
};

export default memo(TextInput);
