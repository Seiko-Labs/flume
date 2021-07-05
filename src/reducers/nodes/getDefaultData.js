export default ({node, nodeType, portTypes, context}) => {
  const inputs = Array.isArray(nodeType.inputs)
    ? nodeType.inputs
    : nodeType.inputs(node.inputData, node.connections, context);
  return inputs.reduce((obj, input) => {
    const inputType = portTypes[input.type];
    obj[input.name || inputType.name] = (
      input.controls ||
      inputType.controls ||
      []
    ).reduce((obj2, control) => {
      obj2[control.name] = control.defaultValue;
      return obj2;
    }, {});
    return obj;
  }, {});
};
