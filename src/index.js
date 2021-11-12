import { useId } from "@reach/auto-id";
import Stage from "./components/Stage/Stage";
import Node from "./components/Node/Node";
import Comment from "./components/Comment/Comment";
import Toaster from "./components/Toaster/Toaster";
import Connections from "./components/Connections/Connections";
import _ from "lodash";
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
import { clearConnections, createConnections } from "./connectionCalculator";
import nodesReducer, { connectNodesReducer } from "./reducers/nodes";
import commentsReducer from "./reducers/commentsReducer";
import toastsReducer from "./reducers/toastsReducer";
import stageReducer from "./reducers/stageReducer";
import usePrevious from "./hooks/usePrevious";
import clamp from "lodash/clamp";
import Cache from "./Cache";
import { DRAG_CONNECTION_ID, STAGE_ID } from "./constants";
import styles from "./styles.css";
import Selection from "react-ds/dist";
import useSelect from "./hooks/useSelect";
import getInitialNodes from "./reducers/nodes/getInitialNodes";

const defaultContext = {};

export const NodeEditor = forwardRef(
  (
    {
      comments: initialComments,
      nodeTypes = {},
      portTypes = {},
      context = defaultContext,
      connector: {
        initialNodes = {},
        action: connectorAction,
        setNodesState,
        setComments,
        defaultNodes,
        temp: { state: tempState, dispatch: dispatchTemp },
        initialNodesState,
        ...connector
      },
      initialStageParams: _initialStageParams,
      hideComments = true,
      disableComments = true,
      circularBehavior,
      debug,
    },
    ref
  ) => {
    const editorId = useId();

    const cache = useRef(new Cache());
    const stage = useRef();
    const [sideEffectToasts, setSideEffectToasts] = useState();
    const [toasts, dispatchToasts] = useReducer(toastsReducer, []);
    const editorRef = useRef();
    const [spaceIsPressed, setSpaceIsPressed] = useState(false);

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

    const [selectedNodes, nodeRefs, handleSelection, clearSelection] =
      useSelect(
        nodesState[currentStateIndex].state ||
          initialNodesState.nodesState[initialNodesState.currentStateIndex],
        nodesState[Math.max(currentStateIndex - 1, 0)].state || {}
      );

    const undoChanges = () => {
      dispatchNodes({
        type: "UNDO_CHANGES",
      });

      clearConnections();
      triggerRecalculation();
    };
    const redoChanges = () => {
      dispatchNodes({
        type: "REDO_CHANGES",
      });

      clearConnections();
      triggerRecalculation();
    };

    useEffect(() => {
      if (connectorAction) {
        const { type, data } = connectorAction();

        switch (type) {
          case "UNDO":
            undoChanges();
            break;
          case "REDO":
            redoChanges();
            break;
          case "COPY":
            dispatchNodes({
              type: "COPY_NODES",
              selectedNodeIds: selectedNodes,
            });
            break;
          case "CUT":
            dispatchNodes({
              type: "CUT_NODES",
              selectedNodeIds: selectedNodes,
            });

            clearConnections();
            triggerRecalculation();
            break;
          case "PASTE":
            dispatchNodes({ type: "PASTE_NODES" });

            clearConnections();
            triggerRecalculation();
            break;
          case "TOGGLE_NODES_VIEW": {
            const { nodeIds, doExpand } = data;

            nodeIds.forEach((id) => {
              dispatchNodes({ type: "TOGGLE_NODE_VIEW", id, doExpand });
            });
            triggerRecalculation();
            break;
          }
          case "ADD_NODE": {
            const { x, y, type } = data;

            dispatchNodes({
              type: "ADD_NODE",
              x,
              y,
              nodeType: type,
            });
            break;
          }
          default:
            break;
        }
      }
    }, [connectorAction, redoChanges, selectedNodes, undoChanges]);

    useEffect(() => {
      !currentStateIndex && dispatchNodes({ type: "HYDRATE_DEFAULT_NODES" });
      // if (connector.options) {
      //   const { options } = connector;
      //
      // }
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

    useEffect(() => {
      if (!_.isEqual(stageState, tempState.stage)) {
        const {
          translate: { x, y },
          scale,
        } = stageState;

        dispatchTemp({ type: "SET_STAGE", scale, x, y });
      }
      if (!_.isEqual(selectedNodes, tempState.selectedNodes)) {
        dispatchTemp({ type: "SELECT_NODES", selectedNodes });
      }
    }, [
      stageState,
      tempState.stage,
      tempState.selectedNodes,
      dispatchTemp,
      selectedNodes,
    ]);

    const recalculateConnections = useCallback(() => {
      createConnections(
        nodesState[currentStateIndex].state,
        stageState,
        editorId
      );
    }, [currentStateIndex, nodesState, editorId, stageState]);

    const recalculateStageRect = useCallback(() => {
      stage.current = document
        .getElementById(`${STAGE_ID}${editorId}`)
        .getBoundingClientRect();
    }, [stage.current, editorId]);

    useLayoutEffect(() => {
      if (shouldRecalculateConnections) {
        recalculateConnections();
        setShouldRecalculateConnections(false);
      }
    }, [shouldRecalculateConnections, recalculateConnections]);

    const handleDragEnd = (e, id, coordinates) => {
      if (selectedNodes.length > 0) {
        dispatchNodes({
          type: "SET_MULTIPLE_NODES_COORDINATES",
          nodesInfo: selectedNodes.map((id) => {
            const nodeRef = nodeRefs.find(([{ id: nId }]) => nId === id)[1];
            const newPositions = nodeRef.current.style.transform.match(
              /^translate\((-?[\d.\\]+)px, ?(-?[\d.\\]+)px\)?/
            );

            return {
              nodeId: id,
              x: newPositions[1],
              y: newPositions[2],
            };
          }),
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

    const triggerRecalculation = () => {
      setShouldRecalculateConnections(true);
    };

    const dragSelectedNodes = (excludedNodeId, deltaX, deltaY) => {
      if (selectedNodes.length > 0) {
        if (selectedNodes.includes(excludedNodeId)) {
          selectedNodes.forEach((id) => {
            if (id !== excludedNodeId) {
              const nodeRef = nodeRefs.find(([{ id: nId }]) => nId === id)[1];
              const oldPositions = nodeRef.current.style.transform.match(
                /^translate\((-?[\d.\\]+)px, ?(-?[\d.\\]+)px\)?/
              );

              if (oldPositions.length === 3) {
                nodeRef.current.style.transform = `translate(${
                  Number(oldPositions[1]) + deltaX
                }px,${Number(oldPositions[2]) + deltaY}px)`;
              }
            }
          });
          recalculateConnections();
        } else {
          clearSelection();
        }
      }
    };

    useImperativeHandle(ref, () => ({
      getNodes() {
        return nodesState[currentStateIndex].state;
      },
      getComments() {
        return comments;
      },
    }));

    useMemo(() => {
      nodesState[Math.max(currentStateIndex - 1, 0)].state &&
        nodesState[currentStateIndex].state !==
          nodesState[Math.max(currentStateIndex - 1, 0)].state &&
        setNodesState &&
        setNodesState({ nodesState, currentStateIndex });
    }, [nodesState, currentStateIndex, setNodesState]);

    const previousComments = usePrevious(comments);

    useEffect(() => {
      previousComments &&
        comments !== previousComments &&
        setComments &&
        setComments(comments);
    }, [comments, previousComments, setComments]);

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
                          {editorRef.current && (
                            <Selection
                              target={editorRef.current}
                              elements={nodeRefs.map((n) => n[1].current)}
                              onSelectionChange={(i) =>
                                spaceIsPressed ||
                                handleSelection(i, tempState.multiselect)
                              }
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
                              style={
                                spaceIsPressed
                                  ? { display: "none" }
                                  : { zIndex: 100 }
                              }
                            />
                          )}
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
                            numNodes={
                              Object.keys(nodesState[currentStateIndex].state)
                                .length
                            }
                            outerStageChildren={
                              <>
                                {debug && (
                                  <div className={styles.debugWrapper}>
                                    <button
                                      className={styles.debugButton}
                                      onClick={() =>
                                        console.log(
                                          nodesState[currentStateIndex].state
                                        )
                                      }
                                    >
                                      Log Nodes
                                    </button>
                                    <button
                                      className={styles.debugButton}
                                      onClick={() =>
                                        console.log(
                                          JSON.stringify(
                                            nodesState[currentStateIndex].state
                                          )
                                        )
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
                              </>
                            }
                          >
                            {!hideComments &&
                              Object.values(comments).map((comment) => (
                                <Comment
                                  {...comment}
                                  stageRect={stage}
                                  dispatch={dispatchComments}
                                  onDragStart={recalculateStageRect}
                                  key={comment.id}
                                />
                              ))}
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

export FlumeConfig, { Colors } from "./typeBuilder/FlumeConfig";
export Controls from "./typeBuilder/Controls";
export { RootEngine } from "./RootEngine";
export useNodeEditorController from "./hooks/useNodeEditorController";
export const useRootEngine = (nodes, engine, context) =>
  Object.keys(nodes).length > 0
    ? engine.resolveRootNode(nodes, { context })
    : {};
