import React, {createRef, useCallback, useRef, useState} from "react";
import {useId} from "@reach/auto-id";
import Stage from "./components/Stage/Stage";
import Node from "./components/Node/Node";
import Comment from "./components/Comment/Comment";
import Toaster from "./components/Toaster/Toaster";
import Connections from "./components/Connections/Connections";
import {
  NodeTypesContext,
  PortTypesContext,
  NodeDispatchContext,
  ConnectionRecalculateContext,
  RecalculateStageRectContext,
  ContextContext,
  StageContext,
  CacheContext,
  EditorIdContext
} from "./context";
import {createConnections} from "./connectionCalculator";
import nodesReducer, {
  connectNodesReducer,
  getInitialNodes
} from "./nodesReducer";
import commentsReducer from "./commentsReducer";
import toastsReducer from "./toastsReducer";
import stageReducer from "./stageReducer";
import usePrevious from "./hooks/usePrevious";
import clamp from "lodash/clamp";
import Cache from "./Cache";
import {STAGE_ID, DRAG_CONNECTION_ID} from "./constants";
import styles from "./styles.css";
import {useSelectionContainer} from "react-drag-to-select";
import Selection from "react-ds/dist";

const defaultContext = {};

export let NodeEditor = (
  {
    comments: initialComments,
    nodes: initialNodes,
    nodeTypes = {},
    portTypes = {},
    defaultNodes = [],
    context = defaultContext,
    onChange,
    onCommentsChange,
    initialScale,
    spaceToPan = true,
    hideComments = false,
    disableComments = false,
    disableZoom = false,
    disablePan = false,
    circularBehavior,
    debug
  },
  ref
  ) => {
    const editorId = useId();
    const cache = React.useRef(new Cache());
    const stage = React.useRef();
    const [sideEffectToasts, setSideEffectToasts] = React.useState()
    const [toasts, dispatchToasts] = React.useReducer(toastsReducer, []);
    const editorRef = useRef();
    const [nodes, dispatchNodes] = React.useReducer(
      connectNodesReducer(
        nodesReducer,
        {nodeTypes, portTypes, cache, circularBehavior, context},
        setSideEffectToasts
      ),
      {},
      () => getInitialNodes(initialNodes, defaultNodes, nodeTypes, portTypes, context)
    );
    const previousNodes = usePrevious(nodes);
    const [comments, dispatchComments] = React.useReducer(
      commentsReducer,
      initialComments || {}
    );
    const [nodeRefs, setNodesRef] = useState([])
    const [selectedNodes, setSelectedNodes] = useState([]);
    const [isDragging, setDragging] = useState(null)

    React.useEffect(() => {
      dispatchNodes({type: "HYDRATE_DEFAULT_NODES"});
    }, []);
    const [
      shouldRecalculateConnections,
      setShouldRecalculateConnections
    ] = React.useState(true);
    const [stageState, dispatchStageState] = React.useReducer(stageReducer, {
      scale: typeof initialScale === "number" ? clamp(initialScale, 0.1, 7) : 1,
      translate: {x: 0, y: 0}
    });

    const recalculateConnections = React.useCallback(() => {
      createConnections(nodes, stageState, editorId);
    }, [nodes, editorId, stageState]);

    const recalculateStageRect = () => {
      setDragging(true)
      stage.current = document
        .getElementById(`${STAGE_ID}${editorId}`)
        .getBoundingClientRect();
    };

    React.useLayoutEffect(() => {
      if (shouldRecalculateConnections) {
        recalculateConnections();
        setShouldRecalculateConnections(false);
      }
    }, [shouldRecalculateConnections, recalculateConnections]);

    const triggerRecalculation = () => {
      setDragging(false)
      setShouldRecalculateConnections(true);
    };

    const dragSelectedNodes = (excludedNodeId, deltaX, deltaY) => {
      if (selectedNodes.length) {
        if (selectedNodes.includes(excludedNodeId)) {
          selectedNodes.forEach(id => {
              if (id !== excludedNodeId) {
                const nodeRef = nodeRefs.find(([{id: nId},]) => nId === id)[1]
                const oldPositions =
                  nodeRef.current.style.transform.match(/^translate\((-?[0-9\\.]+)px, ?(-?[0-9\\.]+)px\);?/)
                if (oldPositions.length === 3)
                  nodeRef.current.style.transform =
                    `translate(${Number(oldPositions[1]) + deltaX}px,${Number(oldPositions[2]) + deltaY}px)`;
                // dispatchNodes({
                //   type: "SET_NODE_COORDINATES",
                //   x: x + deltaX,
                //   y: y + deltaY,
                //   nodeId: id
                // })
              }
            }
          )
          recalculateConnections();
        } else
          setSelectedNodes([])
      }
    }

    React.useImperativeHandle(ref, () => ({
      getNodes: () => {
        return nodes;
      },
      getComments: () => {
        return comments;
      }
    }));

    React.useMemo(() => {
      setDragging(false)

      if (previousNodes && nodes !== previousNodes) {
        (Object.values(nodes).every(({id}) =>
          Object.values(previousNodes).some(({id: oldId}) =>
            id === oldId))) ||
        (!setNodesRef(refs =>
          Object.values(nodes).map(n => [n, createRef()]) || []
        ) && setSelectedNodes([]))
        onChange && onChange(nodes);
      }
      console.log(nodeRefs)
    }, [nodes, previousNodes, onChange]);

    React.useEffect(() => {
      // console.log(nodeRefs)
    }, [nodeRefs, setNodesRef]);


    const handleSelection = (indexes, data) => {
      isDragging || setSelectedNodes(indexes.map(i => nodeRefs[i][0].id))
    }


    const previousComments = usePrevious(comments);

    React.useEffect(() => {
      if (previousComments && onCommentsChange && comments !== previousComments) {
        onCommentsChange(comments);
      }
    }, [comments, previousComments, onCommentsChange]);

    React.useEffect(() => {
      if (sideEffectToasts) {
        dispatchToasts(sideEffectToasts)
        setSideEffectToasts(null)
      }
    }, [sideEffectToasts])

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
                            onSelectionChange={handleSelection}
                            offset={{
                              top: 0,
                              left: 0,
                            }}
                            style={isDragging ? {display: 'none'} : null}
                            ignoreTargets={['div[class^="Node_wrapper__"]', 'div[class^="Node_wrapper__"] *']}
                          />
                        }
                        <Stage
                          ref={editorRef}
                          editorId={editorId}
                          scale={stageState.scale}
                          translate={stageState.translate}
                          spaceToPan={spaceToPan}
                          disablePan={disablePan}
                          disableZoom={disableZoom}
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
                          {!hideComments &&
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
                                nodeRefs.find(([n,]) => n.id === node.id) ?
                                nodeRefs.find(([n,]) => n.id === node.id)[1]
                                                                          : null
                              }
                              stageRect={stage}
                              onDragEnd={triggerRecalculation}
                              onDragHandle={dragSelectedNodes}
                              onDragStart={recalculateStageRect}
                              key={node.id}
                            />
                          ))}
                          <Connections nodes={nodes} editorId={editorId}/>
                          <div
                            className={styles.dragWrapper}
                            id={`${DRAG_CONNECTION_ID}${editorId}`}
                          ></div>
                        </Stage>
                      </RecalculateStageRectContext.Provider>
                    </EditorIdContext.Provider>
                  </CacheContext.Provider>
                </StageContext.Provider>
              </ContextContext.Provider>
            </ConnectionRecalculateContext.Provider>
          </NodeDispatchContext.Provider>
        </NodeTypesContext.Provider>
      </PortTypesContext.Provider>
    );
  }
;
NodeEditor = React.forwardRef(NodeEditor);
export {FlumeConfig, Controls, Colors} from "./typeBuilders";
export {RootEngine} from "./RootEngine";
export const useRootEngine = (nodes, engine, context) =>
  Object.keys(nodes).length ? engine.resolveRootNode(nodes, {context}) : {};
