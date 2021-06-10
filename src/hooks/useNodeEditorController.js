import { useEffect, useReducer, useState } from 'react';

const tempStateReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MULTISELECT':
      return {
        ...state,
        multiselect: action.doEnable,
      }
    default:
      return state
  }
}

const initialTempState = {
  multiselect: false,
}

const initTemp = () => initialTempState

export default () => {
  const [action, setAction] = useState(null)
  const [nodes, setNodes] = useState({})
  const [comments, setComments] = useState({})

  const [tempState, dispatchTemp] = useReducer(
    tempStateReducer, initialTempState, initTemp)

  const dispatch = (type, data = {}) =>
    setAction(() => () => ({ type, data }))

  useEffect(() => {
    action && setAction(null)
  }, [action]);

  return [
    nodes, comments, dispatch, {
      action,
      setNodes,
      setComments,
      temp: { state: tempState, dispatch: dispatchTemp },
    },
    { state: tempState, dispatch: dispatchTemp },
  ]
}
