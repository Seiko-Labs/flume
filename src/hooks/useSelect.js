import { createRef, useEffect, useMemo, useState } from "react";

export default (nodes, previousNodes) => {
  const [nodeRefs, setNodesRef] = useState([]);
  const [selectedNodes, setSelectedNodes] = useState([]);

  const clearSelection = () => setSelectedNodes([]);

  const handleSelection = (indexes, multiple = false) => {
    setSelectedNodes((sn) => {
      return multiple
        ? sn.concat(indexes.map((i) => nodeRefs[i][1].current))
        : indexes.map((i) => nodeRefs[i][1].current);
    });
  };

  useMemo(() => {
    if (!nodeRefs.length) {
      setNodesRef(
        () => Object.values(nodes).map((n) => [n, createRef()]) || []
      ) && clearSelection();
    }
    if (previousNodes && nodes !== previousNodes) {
      Object.values(nodes).every(({ id }) =>
        Object.values(previousNodes).some(({ id: oldId }) => id === oldId)
      ) ||
        (!setNodesRef(
          () => Object.values(nodes).map((n) => [n, createRef()]) || []
        ) &&
          clearSelection());
    }
  }, [nodes, previousNodes]);

  return [
    selectedNodes,
    setSelectedNodes,
    nodeRefs,
    handleSelection,
    clearSelection,
  ];
};
