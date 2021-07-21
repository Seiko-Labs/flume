import { useEffect, useReducer, useState } from 'react';

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
    default:
      return state
  }
}

export default ({
  initialNodesState = null,
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
  initialNodes = null,
  defaultNodes = null
}) => {
  const [action, setAction] = useState(null)
  const [nodeState, setNodeState] = useState(initialNodesState || {})
  const [comments, setComments] = useState({})

  const [tempState, dispatchTemp] = useReducer(
    tempStateReducer, {initialTempState}, () => initialTempState)

  const dispatch = (type, data = {}) =>
    setAction(() => () => ({ type, data }))

  useEffect(() => {
    action && setAction(null)
  }, [action]);

  return [
    nodeState, comments, dispatch, {
      action,
      setNodeState,
      setComments,
      initialNodes,
      initialNodesState,
      defaultNodes,
      temp: { state: tempState, dispatch: dispatchTemp },
    },
    { state: tempState, dispatch: dispatchTemp },
  ]
}
