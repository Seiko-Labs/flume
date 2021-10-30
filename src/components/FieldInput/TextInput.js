import Editor, { useMonaco, loader } from "@monaco-editor/react";
import { dirname } from "path";
import React, { useContext, useEffect, useState } from "react";
import { PortalWithState } from "react-portal";
import { ControllerOptionsContext } from "../../context";
import styles from "./TextInput.css";
import editorTheme from "./editorTheme.json";

/**
 * @typedef {import("@monaco-editor/react").Monaco} Monaco
 */

const TextInput = ({ placeholder, onChange, transformer, predicate, data }) => {
  const preventPropagation = (e) => e.stopPropagation();
  /** @type {Monaco} */
  const monaco = useMonaco();
  const { editorArea } = useContext(ControllerOptionsContext);

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("custom", editorTheme);
    }
  }, [monaco]);
  // TODO: there are some cases with unfocusing, need to approve failure and fix after
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
      <PortalWithState
        closeOnEsc
        closeOnOutsideClick
        node={editorArea || document.getElementById("editorArea")}
      >
        {({ openPortal, portal, closePortal }) => (
          <>
            <button
              className={styles.expander}
              onClick={() => {
                document.activeElement.blur();
                openPortal();
              }}
            />
            {portal(
              <div className={styles.editorWrapper} onClick={closePortal}>
                <div
                  className={styles.editor}
                  onClick={preventPropagation}
                  onDragStart={preventPropagation}
                >
                  <Editor
                    key={"valueEditor"}
                    autoFocus={true}
                    language="python"
                    theme="custom"
                    defaultValue={data}
                    options={{
                      fontFamily: "monospace",
                      minimap: {
                        enabled: false,
                      },
                    }}
                    onChange={async (d) => {
                      onChange(d);
                    }}
                    onMount={(editor) => {
                      editor.setPosition({ lineNumber: 1, column: 1 });
                      editor.focus();
                    }}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </PortalWithState>
    </div>
  );
};

export default TextInput;
