import React, { useContext } from "react";
import Button from "../Button";
import NumberInput from "../FieldInput/NumberInput";
import styles from "./Control.css";
import Checkbox from "../Checkbox/Checkbox";
import TextInput from "../FieldInput/TextInput";
import Select from "../Select/Select";
import { NodeDispatchContext, ContextContext } from "../../context";
import { memo } from "react";

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
  step,
  options = [],
  placeholder,
  validate,
  inputData,
  triggerRecalculation,
  updateNodeConnections,
  getOptions,
  setValue,
  value,
  defaultValue,
  isMonoControl,
  nodeData,
  onPress,
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
      case "select":
        return (
          <Select
            {...commonProps}
            options={
              getOptions ? getOptions(inputData, executionContext) : options
            }
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
          />
        );
      case "number":
        return (
          <TextInput
            {...commonProps}
            onChange={(value) => {
              const [_, second] = value.split(".");
              const isFloat = value.includes(".") && !second;
              if (Number.isNaN(+value) || value === "" || isFloat) {
                commonProps.onChange(value);
              } else {
                commonProps.onChange(+value);
              }
            }}
            predicate={predicate}
            validate={validate}
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
