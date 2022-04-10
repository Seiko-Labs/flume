import { ContextContext, NodeDispatchContext } from "../context";
import usePrevious from "./usePrevious";
import { useContext, useEffect, useMemo } from "react";

export default (transputsFn, transputType, nodeId, inputData, connections) => {
  const nodesDispatch = useContext(NodeDispatchContext);
  const executionContext = useContext(ContextContext);

  const transputs = useMemo(() => {
    if (Array.isArray(transputsFn)) return transputsFn;
    return transputsFn(inputData, connections, executionContext);
  }, [transputsFn, inputData, connections, executionContext]);
  const prevTransputs = usePrevious(transputs);

  useEffect(() => {
    if (!prevTransputs || Array.isArray(transputsFn)) return;
    for (const transput of prevTransputs) {
      const current = transputs.find(({ name }) => transput.name === name);
      if (!current) {
        nodesDispatch({
          type: "DESTROY_TRANSPUT",
          transputType,
          transput: { nodeId, portName: "" + transput.name },
        });
      }
    }
  }, [
    transputsFn,
    transputs,
    prevTransputs,
    nodesDispatch,
    nodeId,
    transputType,
  ]);

  return transputs;
};
