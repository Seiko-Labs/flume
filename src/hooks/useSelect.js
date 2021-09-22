import {createRef, useMemo, useState} from 'react';

export default (nodes, previousNodes) => {
  const [nodeRefs, setNodesRef] = useState([])
  const [selectedNodes, setSelectedNodes] = useState([]);

  const clearSelection = () => setSelectedNodes([])

  const handleSelection = (indexes, multiple = false) => {
    setSelectedNodes(
      sn => multiple
        ? sn.concat(indexes.map(i => nodeRefs[i][0].id))
        : indexes.map(i => nodeRefs[i][0].id)
    )
  }

  useMemo(() => {
    if (!nodeRefs.length) {
      setNodesRef(() =>
        Object.values(nodes).map(n => [n, createRef()]) || [],
      ) && clearSelection()
    }
      if (previousNodes && nodes !== previousNodes) {
        (Object.values(nodes).every(({id}) =>
          Object.values(previousNodes).some(({id: oldId}) =>
            id === oldId))) ||
        (
          !setNodesRef(() =>
            Object.values(nodes).map(n => [n, createRef()]) || [],
          ) && clearSelection()
        )
      }
  }, [nodes, previousNodes]);


  return [selectedNodes, nodeRefs, handleSelection, clearSelection]
}
