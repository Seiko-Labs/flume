import { checkColor, define } from "../utilities";
import { getPortBuilders } from "./Ports";

export const Colors = {
  yellow: "yellow",
  orange: "orange",
  red: "red",
  pink: "pink",
  purple: "purple",
  blue: "blue",
  green: "green",
  grey: "grey",
};

export default class FlumeConfig {
  constructor(config) {
    if (config) {
      this.nodeTypes = { ...config.nodeTypes };
      this.portTypes = { ...config.portTypes };
    } else {
      this.nodeTypes = {};
      this.portTypes = {};
    }
  }

  addRootNodeType(config) {
    this.addNodeType({
      ...config,
      root: true,
      addable: false,
      deletable: false,
    });
    return this;
  }

  addNodeType(config) {
    if (typeof config !== "object" && config !== null) {
      throw new Error(
        "You must provide a configuration object when calling addNodeType."
      );
    }

    // noinspection JSObjectNullOrUndefined
    if (typeof config.type !== "string") {
      throw new Error(
        `Required key, "type" must be a string when calling addNodeType.`
      );
    }
    if (
      typeof config.initialWidth !== "undefined" &&
      typeof config.initialWidth !== "number"
    ) {
      throw new Error(
        `Optional key, "initialWidth" must be a number when calling addNodeType.`
      );
    }
    if (this.nodeTypes[config.type] !== undefined) {
      throw new Error(
        `A node with type "${config.type}" has already been declared.`
      );
    }

    const node = {
      type: config.type,
      label: define(config.label, ""),
      description: define(config.description, ""),
      addable: define(config.addable, true),
      deletable: define(config.deletable, true),
    };

    // Validating category data of flume action that is used to render action
    // header and label info
    node.category = {};
    const { category } = config;

    node.category.id = category?.id || -1;

    node.category.label =
      category?.label && typeof config.label === "string"
        ? category.label
        : "Other";

    node.category.description =
      category?.description && typeof config.description === "string"
        ? category.description
        : "Ungrouped actions are stored here";

    // Optionally supplying action header color
    if (
      category?.tileFontColor &&
      typeof category.tileFontColor === "string" &&
      checkColor(category.tileFontColor)
    )
      node.category.tileFontColor = category.tileFontColor;

    // Optionally supplying action header color
    if (
      category?.tileBackground &&
      typeof category.tileBackground === "string" &&
      checkColor(category.tileBackground)
    )
      node.category.tileBackground = category.tileBackground;

    if (typeof config.icon === "string") node.icon = config.icon;

    if (typeof config.comment === "string") node.comment = config.comment;

    node.expanded = config.expanded || true;

    if (config.initialWidth) node.initialWidth = config.initialWidth;

    if (config.sortIndex !== undefined) node.sortIndex = config.sortIndex;

    if (typeof config.inputs === "function") {
      const inputs = config.inputs(getPortBuilders(this.portTypes));
      if (!Array.isArray(inputs) && typeof config.inputs !== "function")
        throw new Error(
          `When providing a function to the "inputs" key, you must return either an array or a function.`
        );
      node.inputs = inputs;
    } else if (config.inputs === undefined) {
      node.inputs = [];
    } else if (!Array.isArray(config.inputs)) {
      throw new Error(`Optional key, "inputs" must be an array.`);
    } else {
      node.inputs = config.inputs;
    }

    if (typeof config.outputs === "function") {
      const outputs = config.outputs(getPortBuilders(this.portTypes));
      if (!Array.isArray(outputs) && typeof config.outputs !== "function") {
        throw new Error(
          `When providing a function to the "outputs" key, you must return either an array or a function.`
        );
      }
      node.outputs = outputs;
    } else if (config.outputs === undefined) {
      node.outputs = [];
    } else if (!Array.isArray(config.outputs)) {
      throw new Error(`Optional key, "outputs" must be an array.`);
    } else {
      node.outputs = config.outputs;
    }

    if (config.root !== undefined) {
      if (typeof config.root !== "boolean") {
        throw new Error(`Optional key, "root" must be a boolean.`);
      } else {
        node.root = config.root;
      }
    }

    this.nodeTypes[config.type] = node;
    return this;
  }

  removeNodeType(type) {
    if (!this.nodeTypes[type]) {
      console.error(`Non-existent node type "${type}" cannot be removed.`);
    } else {
      const { [type]: deleted, ...nodeTypes } = this.nodeTypes;
      this.nodeTypes = nodeTypes;
    }
    return this;
  }

  addPortType(config) {
    if (typeof config !== "object" && config !== null) {
      throw new Error(
        "You must provide a configuration object when calling addPortType"
      );
    }

    // noinspection JSObjectNullOrUndefined
    if (typeof config.type !== "string") {
      throw new Error(
        `Required key, "type" must be a string when calling addPortType.`
      );
    }
    if (this.portTypes[config.type] !== undefined) {
      throw new Error(
        `A port with type "${config.type}" has already been declared.`
      );
    }
    if (typeof config.name !== "string") {
      throw new Error(
        `Required key, "name" must be a string when calling addPortType.`
      );
    }

    const port = {
      type: config.type,
      name: config.name,
      label: define(config.label, ""),
      hidePort: define(config.hidePort, true),
    };

    if (config.acceptTypes === undefined) {
      port.acceptTypes = [config.type];
    } else if (!Array.isArray(config.acceptTypes)) {
      throw new Error(`Optional key, "acceptTypes" must be an array.`);
    } else {
      port.acceptTypes = config.acceptTypes;
    }

    if (config.controls === undefined) {
      port.controls = [];
    } else if (!Array.isArray(config.controls)) {
      throw new Error(`Optional key, "controls" must be an array.`);
    } else {
      port.controls = config.controls;
    }

    if (
      !port.color &&
      config.color &&
      typeof config.color === "string" &&
      checkColor(config.color)
    )
      port.color = config.color;

    this.portTypes[config.type] = port;
    return this;
  }

  removePortType(type, { skipDynamicNodesCheck = false } = {}) {
    if (!this.portTypes[type]) {
      console.error(`Non-existent port type "${type}" cannot be removed.`);
    } else {
      if (!skipDynamicNodesCheck) {
        const dynamicNodes = Object.values(this.nodeTypes).filter(
          (node) =>
            typeof node.inputs === "function" ||
            typeof node.outputs === "function"
        );
        if (dynamicNodes.length) {
          console.warn(
            `We've detected that one or more of your nodes is using dynamic inputs/outputs. This is a potentially dangerous operation as we are unable to detect if this portType is being used in one of those nodes. You can quiet this message by passing { skipDynamicNodesCheck: true } in as the second argument.`
          );
        }
      }
      const affectedNodes = Object.values(this.nodeTypes).filter(
        (node) =>
          (Array.isArray(node.inputs) &&
            node.inputs.find((p) => p.type === type)) ||
          (Array.isArray(node.outputs) &&
            node.outputs.find((p) => p.type === type))
      );
      if (affectedNodes.length) {
        throw new Error(
          `Cannot delete port type "${type}" without first deleting all node types using these ports: [${affectedNodes
            .map((n) => `${n.type}`)
            .join(", ")}]`
        );
      } else {
        const { [type]: deleted, ...portTypes } = this.portTypes;
        this.portTypes = portTypes;
      }
    }
    return this;
  }
}
