export default (transputs, nodeId) =>
  Object.entries(transputs).reduce((obj, [portName, transput]) => {
    const newTransputs = transput.filter((t) => t.nodeId !== nodeId);
    if (newTransputs.length) {
      obj[portName] = newTransputs;
    }
    return obj;
  }, {});
