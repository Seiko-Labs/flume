class LoopError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
  static maxLoopsExceeded = 1;
}

export class RootEngine {
  constructor(config, resolveInputControls, fireNodeFunction, errorCallback) {
    this.config = config;
    this.fireNodeFunction = fireNodeFunction;
    this.resolveInputControls = resolveInputControls;
    this.errorCallback = errorCallback;
    this.loops = 0;
    this.maxLoops = 1000;
  }

  resetLoops(maxLoops) {
    this.maxLoops = maxLoops !== undefined ? maxLoops : 1000;
    this.loops = 0;
  }

  checkLoops() {
    this.loops++;
  }

  setFireFunction(resolveNodes) {
    this.fireNodeFunction = (node, inputValues, nodeType, context) => {
      return resolveNodes[node.type]
        ? resolveNodes[node.type](node, inputValues, nodeType, context)
        : inputValues;
    };
  }

  getRootNode = (nodes) => {
    const roots = Object.values(nodes).filter((n) => n.root);
    if (roots.length > 1) {
      throw new Error(
        "The root engine must not be called with more than one root node."
      );
    }
    return roots[0];
  };

  reduceRootInputs(inputs, callback) {
    return Object.entries(inputs).reduce((obj, [inputName, connection]) => {
      const input = callback(inputName, connection);
      obj[input.name] = input.value;
      return obj;
    }, {});
  }

  resolveInputValues(node, nodeType, nodes, context) {
    let inputs = nodeType.inputs;
    if (typeof inputs === "function") {
      inputs = inputs(node.inputData, node.connections, context);
    }
    return inputs.reduce((obj, input) => {
      const inputConnections = node.connections.inputs[input.name] || [];
      if (inputConnections.length > 0) {
        obj[input.name] = this.getValueOfConnection(
          inputConnections[0],
          nodes,
          context
        );
      } else {
        obj[input.name] = this.resolveInputControls(
          input.type,
          node.inputData[input.name] || {},
          context
        );
      }
      return obj;
    }, {});
  }

  getValueOfConnection(connection, nodes, context) {
    this.checkLoops();
    const outputNode = nodes[connection.nodeId];
    const outputNodeType = this.config.nodeTypes[outputNode.type];
    const inputValues = this.resolveInputValues(
      outputNode,
      outputNodeType,
      nodes,
      context
    );

    return this.fireNodeFunction(
      outputNode,
      inputValues,
      outputNodeType,
      context
    )[connection.portName];
  }

  resolveRootNode(nodes, options = {}) {
    const rootNode = options.rootNodeId
      ? nodes[options.rootNodeId]
      : this.getRootNode(nodes);
    if (rootNode) {
      let inputs = this.config.nodeTypes[rootNode.type].inputs;
      if (typeof inputs === "function") {
        inputs = inputs(
          rootNode.inputData,
          rootNode.connections,
          options.context
        );
      }
      const controlValues = inputs.reduce((obj, input) => {
        obj[input.name] = this.resolveInputControls(
          input.type,
          rootNode.inputData[input.name] || {},
          options.context
        );
        return obj;
      }, {});
      const inputValues = this.reduceRootInputs(
        rootNode.connections.inputs,
        (inputName, connection) => {
          let value;

          value = this.getValueOfConnection(
            connection[0],
            nodes,
            options.context
          );

          return {
            name: inputName,
            value,
          };
        }
      );
      if (options.onlyResolveConnected) {
        return inputValues;
      } else {
        return { ...controlValues, ...inputValues };
      }
    } else {
      console.error(
        "A root node was not found. The Root Engine requires that exactly one node be marked as the root node."
      );
      return {};
    }
  }
}
