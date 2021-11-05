import React, { useContext, useEffect } from "react";
import { ControllerOptionsContext } from "../../context";
import styles from "./TextInput.css";
import editorTheme from "./editorTheme.json";

const TextInput = ({
  placeholder,
  onChange,
  transformer,
  predicate,
  data,
  nodeData,
}) => {
  const preventPropagation = (e) => e.stopPropagation();

  const { openEditor } = useContext(ControllerOptionsContext);

  return (
    <div className={styles.wrapper}>
      <input
        onChange={({ target }) => onChange(target.value)}
        value={data}
        onDragStart={preventPropagation}
        onMouseDown={preventPropagation}
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

export default TextInput;
