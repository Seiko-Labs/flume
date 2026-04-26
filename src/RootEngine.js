export class RootEngine {
  constructor(config, resolveInputControls, fireNodeFunction, errorCallback) {
    this.config = config;
    this.fireNodeFunction = fireNodeFunction;
    this.resolveInputControls = resolveInputControls;
    this.errorCallback = errorCallback;
  }

  setFireFunction(resolveNodes) {
    this.fireNodeFunction = (node, inputValues, nodeType, context) => {
      return resolveNodes?.[node.type]
        ? resolveNodes[node.type](node, inputValues, nodeType, context)
        : inputValues;
    };
  }

  getRootNode = (nodes) => {
    const roots = Object.values(nodes).filter((n) => n?.root);
    if (roots.length > 1) {
      throw new Error(
        "The root engine must not be called with more than one root node.",
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

  resolveInputValues(node, nodeType, nodes, context, state) {
    let inputs = nodeType.inputs;
    if (typeof inputs === "function") {
      inputs = inputs(node.inputData, node.connections, context);
    }

    return inputs.reduce((obj, input) => {
      const inputConnections = node.connections?.inputs?.[input.name] || [];

      if (inputConnections.length > 0) {
        obj[input.name] = this.getValueOfConnection(
          inputConnections[0],
          nodes,
          context,
          state,
        );
      } else {
        obj[input.name] = this.resolveInputControls(
          input.type,
          node.inputData?.[input.name] || {},
          context,
        );
      }

      return obj;
    }, {});
  }

  computeNodeOutputs(nodeId, nodes, context, state) {
    const { visiting, cache } = state;

    if (cache.has(nodeId)) return cache.get(nodeId);

    if (visiting.has(nodeId)) {
      throw new Error(`Cycle detected while resolving node "${nodeId}".`);
    }

    const outputNode = nodes[nodeId];
    if (!outputNode) {
      throw new Error(`Connection references missing node "${nodeId}".`);
    }

    const outputNodeType = this.config?.nodeTypes?.[outputNode.type];
    if (!outputNodeType) {
      throw new Error(
        `Missing nodeType definition for "${outputNode.type}" (node "${nodeId}").`,
      );
    }

    visiting.add(nodeId);

    const inputValues = this.resolveInputValues(
      outputNode,
      outputNodeType,
      nodes,
      context,
      state,
    );

    const outputs = this.fireNodeFunction(
      outputNode,
      inputValues,
      outputNodeType,
      context,
    );

    cache.set(nodeId, outputs);
    visiting.delete(nodeId);

    return outputs;
  }

  getValueOfConnection(connection, nodes, context, state) {
    const outputs = this.computeNodeOutputs(connection.nodeId, nodes, context, state);
    return outputs?.[connection.portName];
  }

  resolveRootNode(nodes, options = {}) {
    const state = {
      visiting: new Set(),
      cache: new Map(),
    };

    try {
      const rootNode = options.rootNodeId
        ? nodes[options.rootNodeId]
        : this.getRootNode(nodes);

      if (!rootNode) {
        console.error(
          "A root node was not found. The Root Engine requires that exactly one node be marked as the root node.",
        );
        return {};
      }

      const rootNodeType = this.config?.nodeTypes?.[rootNode.type];
      if (!rootNodeType) {
        throw new Error(
          `Missing nodeType definition for root type "${rootNode.type}".`,
        );
      }

      let inputs = rootNodeType.inputs;
      if (typeof inputs === "function") {
        inputs = inputs(rootNode.inputData, rootNode.connections, options.context);
      }

      // Controls on the root itself (unconnected defaults)
      const controlValues = inputs.reduce((obj, input) => {
        obj[input.name] = this.resolveInputControls(
          input.type,
          rootNode.inputData?.[input.name] || {},
          options.context,
        );
        return obj;
      }, {});

      // Values coming from connections into the root
      const inputValues = this.reduceRootInputs(
        rootNode.connections?.inputs || {},
        (inputName, connectionList) => {
          const first = connectionList?.[0];
          const value = first
            ? this.getValueOfConnection(first, nodes, options.context, state)
            : undefined;

          return { name: inputName, value };
        },
      );

      if (options.onlyResolveConnected) return inputValues;
      return { ...controlValues, ...inputValues };
    } catch (err) {
      if (typeof this.errorCallback === "function") this.errorCallback(err);
      throw err;
    }
  }
}
