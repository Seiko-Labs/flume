import {useEffect, useState} from "react";

export default () => {
  const [action, setAction] = useState(null)
  const [nodes, setNodes] = useState({})
  const [comments, setComments] = useState({})
  const dispatch = (type, data = {}) =>
    setAction(() => () => ({type, data}))

  useEffect(() => {
    action && setAction(null)
  }, [action]);

  return [nodes, comments, dispatch, {action, setNodes, setComments}]
}
