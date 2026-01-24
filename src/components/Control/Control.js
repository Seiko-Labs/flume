import React, { useContext, useRef } from "react";
import Button from "../Button";
import styles from "./Control.css";
import Checkbox from "../Checkbox/Checkbox";
import TextInput from "../FieldInput/TextInput";
import Select from "../Select/Select";
import TextInputStyles from "../FieldInput/TextInput.css";
import { NodeDispatchContext, ContextContext } from "../../context";
import { memo } from "react";

const DateTime = ({
  label,
  data,
  onChange,
  nodeData,
  code,
  ...commonProps
}) => {
  const ref = useRef(null);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        gap: "2px",
      }}
    >
      <TextInput
        {...commonProps}
        placeholder="YYYY-MM-DDTHH:MM:SSZ"
        code={code}
        data={data}
        nodeData={nodeData}
        onChange={(value) => {
          onChange(value);
        }}
      />
      <Button
        label={label}
        onPress={() => {
          if (!ref.current) return;
          ref.current.showPicker();
        }}
      />

      <input
        type="datetime-local"
        ref={ref}
        value={data}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          opacity: 0,
          width: 0,
          height: 0,
        }}
        onChange={(e) => {
          // Example format: 2025-12-31T19:30:00Z

          onChange(e.target.value);
        }}
      />
    </div>
  );
};

const Control = ({
  type,
  name,
  nodeId,
  portName,
  label,
  inputLabel,
  data,
  allData,
  render,
  predicate,
  options = [],
  placeholder,
  validate,
  inputData,
  triggerRecalculation,
  updateNodeConnections,
  getOptions,
  setValue,
  defaultValue,
  isMonoControl,
  nodeData,
  onPress,
  code,
}) => {
  const nodesDispatch = useContext(NodeDispatchContext);
  const executionContext = useContext(ContextContext);

  const calculatedLabel = isMonoControl ? inputLabel : label;

  const onChange = (data) => {
    nodesDispatch({
      type: "SET_PORT_DATA",
      data,
      nodeId,
      portName,
      controlName: name,
      setValue,
    });
    triggerRecalculation();
  };

  const onPressButton = (data, cName, pName, nId) => {
    nodesDispatch({
      type: "SET_PORT_DATA",
      data,
      nodeId: nId || nodeId,
      portName: pName || portName,
      controlName: cName || name,
      setValue,
    });
    triggerRecalculation();
  };

  const getControlByType = (type) => {
    const commonProps = {
      triggerRecalculation,
      updateNodeConnections,
      onChange,
      data,
    };
    switch (type) {
      case "datetime":
        return (
          <DateTime
            {...commonProps}
            predicate={predicate}
            placeholder={placeholder}
            validate={validate}
            nodeData={nodeData}
            code={code}
            label={label}
          />
        );
      case "select":
        return (
          <Select
            {...commonProps}
            options={
              getOptions ? getOptions(inputData, executionContext) : options
            }
            onChange={(...args) => {
              commonProps.onChange(...args);
              onPress?.(
                args,
                onPressButton,
                executionContext,
                triggerRecalculation
              );
            }}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        );
      case "text":
        return (
          <TextInput
            {...commonProps}
            predicate={predicate}
            placeholder={placeholder}
            validate={validate}
            nodeData={nodeData}
            code={code}
          />
        );
      case "number":
        return (
          <TextInput
            {...commonProps}
            onChange={onChange}
            predicate={predicate}
            placeholder={placeholder}
            nodeData={nodeData}
          />
        );
      case "checkbox":
        return <Checkbox {...commonProps} label={calculatedLabel} />;
      case "multiselect":
        return (
          <Select
            allowMultiple
            {...commonProps}
            options={
              getOptions ? getOptions(inputData, executionContext) : options
            }
            placeholder={placeholder}
            label={label}
          />
        );
      case "button":
        return (
          <Button
            {...commonProps}
            label={label}
            onPress={() => {
              onPress(
                inputData,
                nodeData,
                onPressButton,
                executionContext,
                triggerRecalculation
              );
            }}
          />
        );
      case "custom":
        return render(
          data,
          onChange,
          executionContext,
          triggerRecalculation,
          {
            label,
            name,
            portName,
            inputLabel,
            defaultValue,
          },
          allData
        );
      default:
        return <div>Control</div>;
    }
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        ...(type.match(/^multiselect$/) && {
          width: "auto",
        }),
      }}
    >
      {getControlByType(type)}
    </div>
  );
};

export default memo(Control);
