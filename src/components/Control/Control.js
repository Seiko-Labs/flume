import React from "react";
import NumberInput from "../FieldInput/NumberInput";
import styles from "./Control.css";
import Checkbox from "../Checkbox/Checkbox";
import TextInput from "../FieldInput/TextInput";
import Select from "../Select/Select";
import { NodeDispatchContext, ContextContext } from "../../context";

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
  transformer,
  options = [],
  placeholder,
  inputData,
  triggerRecalculation,
  updateNodeConnections,
  getOptions,
  setValue,
  defaultValue,
  isMonoControl,
  nodeData,
}) => {
  const nodesDispatch = React.useContext(NodeDispatchContext);
  const executionContext = React.useContext(ContextContext);

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
          />
        );
      case "text":
        return (
          <TextInput
            {...commonProps}
            predicate={predicate}
            placeholder={placeholder}
            nodeData={nodeData}
          />
        );
      case "number":
        return (
          <NumberInput
            {...commonProps}
            step={step}
            predicate={predicate}
            placeholder={placeholder}
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

export default Control;
