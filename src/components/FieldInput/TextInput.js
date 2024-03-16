import React, { useContext } from "react";
import { ControllerOptionsContext } from "../../context";
import styles from "./TextInput.css";
import { memo } from "react";

const TextInput = ({ placeholder, onChange, data, nodeData, code }) => {
  const preventPropagation = (e) => e.stopPropagation();
  const { openEditor, isRightBarOpened } = useContext(ControllerOptionsContext);

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        if (code) {
          openEditor(data, onChange, nodeData);
        }
      }}
    >
      <input
        onChange={({ target }) => {
          onChange(target.value);
        }}
        value={data}
        onDragStart={preventPropagation}
        onMouseDown={preventPropagation}
        onClick={(e) => {
          e.stopPropagation();
          if ((isRightBarOpened && isRightBarOpened()) || code) {
            openEditor(data, onChange, nodeData);
          }
        }}
        disabled={code}
        type="text"
        placeholder={placeholder}
        className={styles.input}
      />

      <button
        className={styles.expander}
        onClick={() => {
          document.activeElement.blur();
          openEditor(data, onChange, nodeData);
        }}
      />
    </div>
  );
};

export default memo(TextInput);
