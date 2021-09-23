import { useEffect, useReducer, useState } from 'react';
import {useDebounce} from "@react-hook/debounce";

const tempStateReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MULTISELECT':
      return {
        ...state,
        multiselect: action.doEnable,
      }
    case 'SET_STAGE': {
      const {x, y, scale} = action

      return {
        ...state,
        stage: {
          scale,
          translate: {
            x,
            y
          }
        }
      }
    }
    case 'SELECT_NODES': {
      const {selectedNodes} = action

      return {
        ...state,
        selectedNodes
      }
    }
    default:
      return state
  }
}

export default ({
  initialNodesState = undefined,
  initialTempState = {
    multiselect: false,
    selectedNodes: [],
    stage: {
      scale: 1,
      translate: {
        x: 0,
        y: 0
      }
    }
  },
  initialNodes = undefined,
  defaultNodes = undefined
}) => {
  const [action, setAction] = useState(null)
  const [nodesState, setNodesState] = useState(initialNodesState || {})
  const [comments, setComments] = useState({})

  const [tempState, dispatchTemp] = useReducer(
    tempStateReducer, {initialTempState}, () => initialTempState)
  const [tempStateDebounced, setTempStateDebounced] = useDebounce(tempState, 1000)
  const [nodesStateDebounced, setNodesStateDebounced] = useDebounce(tempState, 200)

  useEffect(() => {
    setTempStateDebounced(tempState)
  }, [tempState])

  useEffect(() => {
    setNodesStateDebounced(nodesState)
  }, [nodesState])

  const dispatch = (type, data = {}) =>
    setAction(() => () => ({ type, data }))

  useEffect(() => {
    action && setAction(null)
  }, [action]);

  return [
    nodesStateDebounced, comments, dispatch, {
      action,
      setNodesState,
      setComments,
      initialNodes,
      initialNodesState,
      defaultNodes,
      temp: { state: tempState, dispatch: dispatchTemp },
    },
    { state: tempStateDebounced, dispatch: dispatchTemp },
  ]
}
