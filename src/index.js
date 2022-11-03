import { useId } from "@reach/auto-id";
import Stage from "./components/Stage/Stage";
import Node from "./components/Node/Node";
import Comment from "./components/Comment/Comment";
import Toaster from "./components/Toaster/Toaster";
import Connections from "./components/Connections/Connections";
import React, {
  createRef,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import {
  CacheContext,
  ConnectionRecalculateContext,
  ContextContext,
  ControllerOptionsContext,
  EditorIdContext,
  NodeDispatchContext,
  NodeTypesContext,
  PortTypesContext,
  RecalculateStageRectContext,
  StageContext,
} from "./context";
import { createConnections } from "./connectionCalculator";
import useConnectorActions from "./hooks/useConnectorActions";
import nodesReducer, { connectNodesReducer } from "./reducers/nodes";
import commentsReducer from "./reducers/commentsReducer";
import toastsReducer from "./reducers/toastsReducer";
import stageReducer from "./reducers/stageReducer";
import usePrevious from "./hooks/usePrevious";
import clamp from "lodash/clamp";
import Cache from "./Cache";
import { DRAG_CONNECTION_ID, STAGE_ID } from "./constants";
import styles from "./styles.css";
import Selection from "./selection";
import useSelect from "./hooks/useSelect";
import getInitialNodes from "./reducers/nodes/getInitialNodes";
import nodeStyles from "./components/Node/Node.css";

const defaultContext = {};

const checkIntersection = (boxA, boxB) => {
  if (
    boxA.bottom > boxB.top &&
    boxA.right > boxB.left &&
    boxA.top < boxB.bottom &&
    boxA.left < boxB.right
  ) {
    return true;
  }
  return false;
};

export const NodeEditor = forwardRef(
  (
    {
      comments: initialComments,
      nodeTypes = {},
      portTypes = {},
      context = defaultContext,
      connector,
      initialStageParams: _initialStageParams,
      hideComments = true,
      disableComments = true,
      circularBehavior,
      focusNode = { node: null, color: null },
      onFocusChange,
      debug,
    },
    ref
  ) => {
    const editorId = useId();
    const {
      initialNodes = {},
      setComments,
      defaultNodes,
      temp: { state: tempState },
      initialNodesState,
    } = connector;

    const cache = useRef(new Cache());
    const stage = useRef();
    const [sideEffectToasts, setSideEffectToasts] = useState();
    const [toasts, dispatchToasts] = useReducer(toastsReducer, []);
    const editorRef = useRef();
    const [spaceIsPressed, setSpaceIsPressed] = useState(false);
    const [visibleNodes, setVisibleNodes] = useState([]);

    const [{ nodesState, currentStateIndex }, dispatchNodes] = useReducer(
      connectNodesReducer(
        nodesReducer,
        {
          nodeTypes,
          portTypes,
          cache,
          circularBehavior,
          context,
        },
        setSideEffectToasts
      ),
      {},
      () =>
        initialNodesState || {
          nodesState: [
            {
              state: getInitialNodes(
                initialNodes,
                defaultNodes || [],
                nodeTypes,
                portTypes,
                context
              ),
              action: { type: "INITIAL" },
            },
          ],
          currentStateIndex: 0,
        }
    );

    const [comments, dispatchComments] = useReducer(
      commentsReducer,
      initialComments || {}
    );

    const [
      selectedNodes,
      setSelectedNodes,
      nodeRefs,
      handleSelection,
      clearSelection,
    ] = useSelect(
      nodesState[currentStateIndex].state ||
        initialNodesState.nodesState[initialNodesState.currentStateIndex],
      nodesState[Math.max(currentStateIndex - 1, 0)].state || {}
    );

    const handleDocumentKeyUp = (e) => {
      if (e.which === 32) {
        setSpaceIsPressed(false);
        document.removeEventListener("keyup", handleDocumentKeyUp);
      }
    };

    const handleKeyDown = (e) => {
      if (e.which === 32) {
        setSpaceIsPressed(true);
        document.addEventListener("keyup", handleDocumentKeyUp);
      }
    };

    useEffect(() => {
      toggleVisibility();
    }, [nodesState]);

    // useEffect(() => {
    //   previousComments &&
    //     comments !== previousComments &&
    //     setComments &&
    //     setComments(comments);
    // }, [comments, previousComments, setComments]);

    useImperativeHandle(ref, () => ({
      getNodes() {
        return nodesState[currentStateIndex].state;
      },
      getComments() {
        return comments;
      },
    }));

    useEffect(() => {
      !currentStateIndex && dispatchNodes({ type: "HYDRATE_DEFAULT_NODES" });
      recalculateConnections();
      triggerRecalculation();

      document.addEventListener("keydown", handleKeyDown);

      return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const [shouldRecalculateConnections, setShouldRecalculateConnections] =
      useState(true);

    const initialStageParams = _initialStageParams || tempState.stage;

    const [stageState, dispatchStageState] = useReducer(stageReducer, {
      scale:
        typeof initialStageParams?.scale === "number"
          ? clamp(initialStageParams?.scale, 0.1, 7)
          : 1,
      translate: {
        x:
          typeof initialStageParams?.translate?.x === "number"
            ? initialStageParams.translate.x
            : 0,
        y:
          typeof initialStageParams?.translate?.y === "number"
            ? initialStageParams.translate.y
            : 0,
      },
    });

    const triggerRecalculation = () => {
      setShouldRecalculateConnections(true);
    };

    useConnectorActions({
      dispatchNodes,
      connector,
      triggerRecalculation,
      selectedNodes,
      stageState,
      dispatchStageState,
      nodesState,
      currentStateIndex,
      setSelectedNodes,
    });

    const recalculateConnections = useCallback(() => {
      createConnections(
        nodesState[currentStateIndex].state,
        stageState,
        editorId
      );
    }, [currentStateIndex, nodesState, editorId, stageState]);

    const recalculateStageRect = () => {
      setVisibleNodes((prev) =>
        prev.filter((nodeid) => !selectedNodes.includes(nodeid))
      );

      stage.current = document
        .getElementById(`${STAGE_ID}${editorId}`)
        .getBoundingClientRect();
    };

    useLayoutEffect(() => {
      window.STAGE_ID = `${STAGE_ID}${editorId}`;
      if (shouldRecalculateConnections) {
        recalculateConnections();
        setShouldRecalculateConnections(false);
      }
    }, [shouldRecalculateConnections, recalculateConnections]);

    const handleDragEnd = (e, id, coordinates) => {
      toggleVisibility();
      if (selectedNodes.length > 0) {
        dispatchNodes({
          type: "SET_MULTIPLE_NODES_COORDINATES",
          nodesInfo: selectedNodes
            .map((id) => {
              const nodeRef = nodeRefs.find(([{ id: nId }]) => nId === id)[1];
              if (nodeRef) {
                const newPositions = nodeRef.current.style.transform.match(
                  /^translate\((-?[0-9\\.]+)px, ?(-?[0-9\\.]+)px\)?/
                );

                return {
                  nodeId: id,
                  x: newPositions[1],
                  y: newPositions[2],
                };
              }
            })
            .filter((res) => !!res),
        });
      } else {
        dispatchNodes({
          type: "SET_NODE_COORDINATES",
          ...coordinates,
          nodeId: id,
        });
      }
      triggerRecalculation();
    };

    const toggleVisibility = (args) => {
      if (args) return setVisibleNodes([]);

      const v = [];
      if (editorRef.current) {
        const nodes = document.getElementsByClassName(nodeStyles?.wrapper);

        for (const node of nodes) {
          const nodeRef = node;

          if (nodeRef) {
            if (
              !checkIntersection(
                nodeRef.getBoundingClientRect(),
                editorRef.current.getBoundingClientRect()
              )
            ) {
              nodeRef.style.visibility = "hidden";
            } else {
              nodeRef.style.visibility = "visible";

              v.push(nodeRef.id);
            }
          }
        }
        setVisibleNodes(v);
      }
    };

    const dragSelectedNodes = async (excludedNodeId, deltaX, deltaY) => {
      if (selectedNodes.length > 0) {
        if (selectedNodes.includes(excludedNodeId)) {
          for (const id of selectedNodes) {
            if (id !== excludedNodeId) {
              // const nodeRef = document.getElementById(id);
              const nodeRef = nodeRefs.find(([{ id: nId }]) => nId === id)[1]
                ?.current;
              if (nodeRef) {
                const oldPositions = nodeRef.style.transform.match(
                  /^translate\((-?[\d.\\]+)px, ?(-?[\d.\\]+)px\)?/
                );

                if (oldPositions && oldPositions.length === 3) {
                  nodeRef.style.transform = `translate(${
                    Number(oldPositions[1]) + deltaX
                  }px,${Number(oldPositions[2]) + deltaY}px)`;
                }
              }
            }
          }

          recalculateConnections();
        } else {
          clearSelection();
        }
      }
    };

    useEffect(() => {
      if (sideEffectToasts) {
        dispatchToasts(sideEffectToasts);
        setSideEffectToasts(null);
      }
    }, [sideEffectToasts]);

    return (
      <PortTypesContext.Provider value={portTypes}>
        <NodeTypesContext.Provider value={nodeTypes}>
          <NodeDispatchContext.Provider value={dispatchNodes}>
            <ConnectionRecalculateContext.Provider value={triggerRecalculation}>
              <ContextContext.Provider value={context}>
                <StageContext.Provider value={stageState}>
                  <CacheContext.Provider value={cache}>
                    <EditorIdContext.Provider value={editorId}>
                      <ControllerOptionsContext.Provider
                        value={connector.options || {}}
                      >
                        <RecalculateStageRectContext.Provider
                          value={recalculateStageRect}
                        >
                          {!spaceIsPressed && editorRef.current && (
                            <Selection
                              target={editorRef.current}
                              elements={nodeRefs.map((n) => n[1].current)}
                              onSelectionChange={(i) => {
                                spaceIsPressed ||
                                  handleSelection(i, tempState.multiselect);
                              }}
                              offset={{
                                top: 0,
                                left: 0,
                              }}
                              zoom={stageState.scale}
                              ignoreTargets={[
                                'div[class^="Node_wrapper__"]',
                                'div[class^="Node_wrapper__"] *',
                                'div[class^="Comment_wrapper__"]',
                                'div[class^="Comment_wrapper__"] *',
                              ]}
                              style={{ zIndex: 100, cursor: "inherit" }}
                            />
                          )}

                          <Stage
                            focusNode={focusNode}
                            onFocusChange={onFocusChange}
                            ref={editorRef}
                            editorId={editorId}
                            toggleVisibility={toggleVisibility}
                            spaceIsPressed={spaceIsPressed}
                            scale={stageState.scale}
                            translate={stageState.translate}
                            spaceToPan={true}
                            dispatchStageState={dispatchStageState}
                            dispatchComments={dispatchComments}
                            disableComments={disableComments || hideComments}
                            stageRef={stage}
                            numNodes={
                              Object.keys(nodesState[currentStateIndex].state)
                                .length
                            }
                            outerStageChildren={
                              <Toaster
                                toasts={toasts}
                                dispatchToasts={dispatchToasts}
                              />
                            }
                            DRAGGABLE_CANVAS={context.DRAGGABLE_CANVAS}
                            draggableCanvasSet={context.draggableCanvasSet}
                          >
                            {/* {!hideComments &&
                              Object.values(comments).map((comment) => (
                                <Comment
                                  {...comment}
                                  stageRect={stage}
                                  dispatch={dispatchComments}
                                  onDragStart={recalculateStageRect}
                                  key={comment.id}
                                />
                              ))} */}
                            {Object.values(
                              nodesState[currentStateIndex].state
                            ).map((node) => (
                              <Node
                                {...node}
                                isSelected={selectedNodes.includes(node.id)}
                                ref={
                                  nodeRefs.find(([n]) => n.id === node.id)
                                    ? nodeRefs.find(
                                        ([n]) => n.id === node.id
                                      )[1]
                                    : createRef()
                                }
                                stageRect={stage}
                                hideControls={
                                  !visibleNodes.includes(node.id) ||
                                  stageState.scale < 0.5
                                }
                                onDragEnd={handleDragEnd}
                                onDragHandle={dragSelectedNodes}
                                onDragStart={recalculateStageRect}
                                key={node.id}
                              />
                            ))}
                            <Connections
                              nodes={nodesState[currentStateIndex].state}
                              editorId={editorId}
                            />
                            <div
                              className={styles.dragWrapper}
                              id={`${DRAG_CONNECTION_ID}${editorId}`}
                            />
                          </Stage>

                          {/* </HotKeys> */}
                        </RecalculateStageRectContext.Provider>
                      </ControllerOptionsContext.Provider>
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
);

NodeEditor.displayName = "NodeEditor";

export { FlumeConfig, Colors } from "./typeBuilder/FlumeConfig";
export { Controls } from "./typeBuilder/Controls";
export { RootEngine } from "./RootEngine";
export { useNodeEditorController } from "./hooks/useNodeEditorController";
export const useRootEngine = (nodes, engine, context) =>
  Object.keys(nodes).length > 0
    ? engine.resolveRootNode(nodes, { context })
    : {};
