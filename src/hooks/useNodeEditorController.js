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

const initialTempState = {
  multiselect: false,
  stage: {
    scale: 1,
    translate: {
      x: 0,
      y: 0
    }
  }
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
