import { define } from "../utilities";

const buildControlType =
  (defaultConfig, validate = () => {}, setup = () => ({})) =>
  (config) => {
    validate(config);
    return {
      type: defaultConfig.type,
      label: define(config.label, defaultConfig.label || ""),
      name: define(config.name, defaultConfig.name || ""),
      defaultValue: define(config.defaultValue, defaultConfig.defaultValue),
      setValue: define(config.setValue, undefined),
      ...setup(config),
    };
  };

const Controls = {
  text: buildControlType({
    type: "text",
    name: "text",
    defaultValue: "",
  }),
  select: buildControlType(
    {
      type: "select",
      name: "select",
      options: [],
      defaultValue: "",
    },
    () => {},
    (config) => ({
      options: define(config.options, []),
      getOptions: define(config.getOptions, undefined),
      placeholder: define(config.placeholder, undefined),
    })
  ),
  number: buildControlType(
    {
      type: "number",
      name: "number",
      defaultValue: 0,
    },
    () => {},
    (config) => ({
      step: define(config.step, undefined),
    })
  ),
  checkbox: buildControlType({
    type: "checkbox",
    name: "checkbox",
    defaultValue: false,
  }),
  multiselect: buildControlType(
    {
      type: "multiselect",
      name: "multiselect",
      options: [],
      defaultValue: [],
    },
    () => {},
    (config) => ({
      options: define(config.options, []),
      getOptions: define(config.getOptions, undefined),
      placeholder: define(config.placeholder, undefined),
    })
  ),
  custom: buildControlType(
    {
      type: "custom",
      name: "custom",
      render: () => {},
      defaultValue: undefined,
    },
    () => {},
    (config) => ({
      render: define(config.render, () => {}),
    })
  ),
};

export default Controls;
