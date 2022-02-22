import React, { useContext, useEffect } from "react";
import { ControllerOptionsContext } from "../../context";
import styles from "./TextInput.css";
import {readFileSync} from "fs";
import jsonStorage from "electron-json-storage";

const TextInput = ({ placeholder, onChange, data, nodeData, validate }) => {
  const preventPropagation = (e) => e.stopPropagation();

  const { openEditor } = useContext(ControllerOptionsContext);

  return (
    <div className={styles.wrapper}>
      <input
        onChange={({ target }) => {
          if (validate(target.value)) onChange(target.value);
          else target.value = data;
        }}
        value={data}
        onDragStart={preventPropagation}
        onMouseDown={preventPropagation}
        onClick={(e) => {
          e.stopPropagation();
          //Check if rightbar is opened for rightbar card editor in studio
          const stateStorage = JSON.parse(
            readFileSync(`${jsonStorage.getDefaultDataPath()}\\stateStorageFile.json`, {
              encoding: 'utf8',
              flag: 'r',
            }) || '{}'
          );
          if (stateStorage.additional.isRightBarOpened) {
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

export default TextInput;
