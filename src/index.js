import React, { useEffect, useMemo, useRef } from 'react'
import { useId } from '@reach/auto-id'
import Stage from './components/Stage/Stage'
import Node from './components/Node/Node'
import Comment from './components/Comment/Comment'
import Toaster from './components/Toaster/Toaster'
import Connections from './components/Connections/Connections'
import _ from 'lodash'
import {
  CacheContext,
  ConnectionRecalculateContext,
  ContextContext,
  EditorIdContext,
  NodeDispatchContext,
  NodeTypesContext,
  PortTypesContext,
  RecalculateStageRectContext,
  StageContext,
} from './context'
import { clearConnections, createConnections } from './connectionCalculator'
import nodesReducer, { connectNodesReducer } from './reducers/nodes/'
import commentsReducer from './reducers/commentsReducer'
import toastsReducer from './reducers/toastsReducer'
import stageReducer from './reducers/stageReducer'
import usePrevious from './hooks/usePrevious'
import clamp from 'lodash/clamp'
import Cache from './Cache'
import { DRAG_CONNECTION_ID, STAGE_ID } from './constants'
import styles from './styles.css'
import Selection from 'react-ds/dist'
import useSelect from './hooks/useSelect'
import getInitialNodes from './reducers/nodes/getInitialNodes';

const defaultContext = {}

export let NodeEditor = (
  {
    comments: initialComments,
    nodeTypes = {},
    portTypes = {},
    context = defaultContext,
    connector,
    initialStageParams,
    hideComments = false,
    disableComments = false,
    circularBehavior,
    debug,
  },
  ref,
) => {
  const editorId = useId()
  const cache = React.useRef(new Cache())
  const stage = React.useRef()
  const [sideEffectToasts, setSideEffectToasts] = React.useState()
  const [toasts, dispatchToasts] = React.useReducer(toastsReducer, [])
  const editorRef = useRef()
  const [spaceIsPressed, setSpaceIsPressed] = React.useState(false)

  const initialNodes = connector.initialNodes || {}

  const [
    { nodesState, currentStateIndex }, dispatchNodes,
  ] = React.useReducer(
    connectNodesReducer(
      nodesReducer,
      {
        nodeTypes,
        portTypes,
        cache,
        circularBehavior,
        context,
      },
      setSideEffectToasts,
    ),
    {},
    () => (connector.initialNodesState || {
      nodesState: [
        {
          state: getInitialNodes(
            initialNodes,
            connector.defaultNodes || [],
            nodeTypes,
            portTypes,
            context,
          ),
          action: { type: 'INITIAL' },
        },
      ],
      currentStateIndex: 0,
    }),
  )
  const {
    action: connectorAction,
    setNodesState,
    setComments,
    temp: { state: tempState, dispatch: dispatchTemp },
  } = connector
  const nodes = nodesState[currentStateIndex].state
  const previousNodes = usePrevious(nodes)
  const [comments, dispatchComments] = React.useReducer(
    commentsReducer,
    initialComments || {},
  )
  const [selectedNodes, nodeRefs, handleSelection, clearSelection] = useSelect(
    nodes, previousNodes)

  useEffect(() => {
    if ( connectorAction ) {
      const { type, data } = connectorAction()

      switch (type) {
        case 'UNDO':
          undoChanges()
          break
        case 'REDO':
          redoChanges()
          break
        case 'COPY':
          dispatchNodes({
            type: 'COPY_NODES',
            selectedNodeIds: selectedNodes,
          })
          break
        case 'CUT':
          dispatchNodes({
            type: 'CUT_NODES',
            selectedNodeIds: selectedNodes,
          })

          clearConnections()
          triggerRecalculation()
          break
        case 'PASTE':
          dispatchNodes({ type: 'PASTE_NODES' })

          clearConnections()
          triggerRecalculation()
          break
        case 'TOGGLE_NODES_VIEW':
          const { nodeIds, doExpand } = data
          nodeIds.forEach(id => {
            dispatchNodes({ type: 'TOGGLE_NODE_VIEW', id, doExpand })
          })
          break
        default:
          break

      }
    }
  }, [connectorAction, redoChanges, selectedNodes, undoChanges]);

  React.useEffect(() => {
    dispatchNodes({ type: 'HYDRATE_DEFAULT_NODES' })
  }, [])

  const [
    shouldRecalculateConnections,
    setShouldRecalculateConnections,
  ] = React.useState(true)

  initialStageParams = initialStageParams || tempState.stage

  const [stageState, dispatchStageState] = React.useReducer(stageReducer, {
    scale: typeof initialStageParams?.scale === 'number'
      ? clamp(initialStageParams?.scale, 0.1, 7)
      : 1,
    translate: {
      x: typeof initialStageParams?.translate?.x === 'number'
        ? initialStageParams.translate.x : 0,
      y: typeof initialStageParams?.translate?.y === 'number'
        ? initialStageParams.translate.y : 0,
    },
  })


  useMemo(() => {
    if ( !_.isEqual(stageState, tempState.stage) ) {
      const { translate: { x, y }, scale } = stageState
      dispatchTemp({ type: 'SET_STAGE', scale, x, y })
    }
  }, [stageState, tempState.stage, dispatchTemp])

  const recalculateConnections = React.useCallback(() => {
    createConnections(nodes, stageState, editorId)
  }, [nodes, editorId, stageState])

  const recalculateStageRect = () => {
    stage.current = document
      .getElementById(`${STAGE_ID}${editorId}`)
      .getBoundingClientRect()
  }

  React.useLayoutEffect(() => {
    if ( shouldRecalculateConnections ) {
      recalculateConnections()
      setShouldRecalculateConnections(false)
    }
  }, [shouldRecalculateConnections, recalculateConnections])

  const handleDragEnd = (e, id, coordinates) => {
    if ( selectedNodes.length ) {
      dispatchNodes({
        type: 'SET_MULTIPLE_NODES_COORDINATES',
        nodesInfo: selectedNodes.map(id => {
          const nodeRef = nodeRefs.find(([{ id: nId }]) => nId === id)[1]
          const newPositions =
            nodeRef.current.style.transform.match(
              /^translate\((-?[0-9\\.]+)px, ?(-?[0-9\\.]+)px\)?/)

          return ({
            nodeId: id,
            x: newPositions[1],
            y: newPositions[2],
          })
        }),
      })
    } else {
      dispatchNodes({
        type: 'SET_NODE_COORDINATES',
        ...coordinates,
        nodeId: id,
      })
    }
    triggerRecalculation()
  }

  const triggerRecalculation = () => {
    setShouldRecalculateConnections(true)
  }

  const dragSelectedNodes = (excludedNodeId, deltaX, deltaY) => {
    if ( selectedNodes.length ) {
      if ( selectedNodes.includes(excludedNodeId) ) {
        selectedNodes.forEach(id => {
            if ( id !== excludedNodeId ) {
              const nodeRef = nodeRefs.find(([{ id: nId }]) => nId === id)[1]
              const oldPositions =
                nodeRef.current.style.transform
                       .match(
                         /^translate\((-?[0-9\\.]+)px, ?(-?[0-9\\.]+)px\)?/,
                       )
              if ( oldPositions.length === 3 )
                nodeRef.current.style.transform =
                  `translate(${Number(oldPositions[1]) + deltaX}px,${Number(
                    oldPositions[2]) + deltaY}px)`
            }
          },
        )
        recalculateConnections()
      } else
        clearSelection()
    }
  }

  React.useImperativeHandle(ref, () => ({
    getNodes: () => {
      return nodes
    },
    getComments: () => {
      return comments
    },
  }))

  React.useMemo(() => {
    previousNodes
    && nodes !== previousNodes
    && setNodesState
    && setNodesState(nodesState)
  }, [nodesState, nodes, previousNodes, setNodesState])


  const previousComments = usePrevious(comments)

  React.useEffect(() => {
    previousComments
    && comments !== previousComments
    && setComments
    && setComments(comments)
  }, [comments, previousComments, setComments])

  React.useEffect(() => {
    if ( sideEffectToasts ) {
      dispatchToasts(sideEffectToasts)
      setSideEffectToasts(null)
    }
  }, [sideEffectToasts])

  const undoChanges = () => {
    dispatchNodes({
      type: 'UNDO_CHANGES',
    })

    clearConnections()
    triggerRecalculation()
  }
  const redoChanges = () => {
    dispatchNodes({
      type: 'REDO_CHANGES',
    })

    clearConnections()
    triggerRecalculation()
  }

  return (
    <PortTypesContext.Provider value={portTypes}>
      <NodeTypesContext.Provider value={nodeTypes}>
        <NodeDispatchContext.Provider value={dispatchNodes}>
          <ConnectionRecalculateContext.Provider value={triggerRecalculation}>
            <ContextContext.Provider value={context}>
              <StageContext.Provider value={stageState}>
                <CacheContext.Provider value={cache}>
                  <EditorIdContext.Provider value={editorId}>
                    <RecalculateStageRectContext.Provider
                      value={recalculateStageRect}
                    >
                      {
                        editorRef.current &&
                        <Selection
                          target={editorRef.current}
                          elements={nodeRefs.map(n => n[1].current)}
                          onSelectionChange={(i) =>
                            spaceIsPressed ||
                            handleSelection(i, tempState.multiselect)}
                          offset={{
                            top: 0,
                            left: 0,
                          }}
                          ignoreTargets={[
                            'div[class^="Node_wrapper__"]',
                            'div[class^="Node_wrapper__"] *',
                            'div[class^="Comment_wrapper__"]',
                            'div[class^="Comment_wrapper__"] *',
                          ]}
                          style={spaceIsPressed ? { display: 'none' } : {}}
                        />
                      }
                      <Stage
                        ref={editorRef}
                        editorId={editorId}
                        setSpaceIsPressed={setSpaceIsPressed}
                        scale={stageState.scale}
                        translate={stageState.translate}
                        spaceToPan={true}
                        disablePan={false}
                        disableZoom={false}
                        dispatchStageState={dispatchStageState}
                        dispatchComments={dispatchComments}
                        disableComments={disableComments || hideComments}
                        stageRef={stage}
                        numNodes={Object.keys(nodes).length}
                        outerStageChildren={
                          <React.Fragment>
                            {debug && (
                              <div className={styles.debugWrapper}>
                                <button
                                  className={styles.debugButton}
                                  onClick={() => console.log(nodes)}
                                >
                                  Log Nodes
                                </button>
                                <button
                                  className={styles.debugButton}
                                  onClick={() =>
                                    console.log(JSON.stringify(nodes))
                                  }
                                >
                                  Export Nodes
                                </button>
                                <button
                                  className={styles.debugButton}
                                  onClick={() => console.log(comments)}
                                >
                                  Log Comments
                                </button>
                              </div>
                            )}
                            <Toaster
                              toasts={toasts}
                              dispatchToasts={dispatchToasts}
                            />
                          </React.Fragment>
                        }
                      >
                        { !hideComments &&
                          Object.values(comments).map(comment => (
                            <Comment
                              {...comment}
                              stageRect={stage}
                              dispatch={dispatchComments}
                              onDragStart={recalculateStageRect}
                              key={comment.id}
                            />
                          ))}
                        {Object.values(nodes).map((node) => (
                          <Node
                            {...node}
                            isSelected={selectedNodes.includes(node.id)}
                            ref={
                              nodeRefs.find(([n]) => n.id === node.id)
                                ? nodeRefs.find(([n]) => n.id === node.id)[1]
                                : null
                            }
                            stageRect={stage}
                            onDragEnd={handleDragEnd}
                            onDragHandle={dragSelectedNodes}
                            onDragStart={recalculateStageRect}
                            key={node.id}
                          />
                        ))}
                        <Connections nodes={nodes} editorId={editorId}/>
                        <div
                          className={styles.dragWrapper}
                          id={`${DRAG_CONNECTION_ID}${editorId}`}
                        />
                      </Stage>
                      {/*</HotKeys>*/}
                    </RecalculateStageRectContext.Provider>
                  </EditorIdContext.Provider>
                </CacheContext.Provider>
              </StageContext.Provider>
            </ContextContext.Provider>
          </ConnectionRecalculateContext.Provider>
        </NodeDispatchContext.Provider>
      </NodeTypesContext.Provider>
    </PortTypesContext.Provider>
  )
}

NodeEditor = React.forwardRef(NodeEditor)
export { FlumeConfig, Controls, Colors } from './typeBuilders'
export { RootEngine } from './RootEngine'
export useNodeEditorController from './hooks/useNodeEditorController'
export const useRootEngine = (nodes, engine, context) =>
  Object.keys(nodes).length ? engine.resolveRootNode(nodes, { context }) : {}
