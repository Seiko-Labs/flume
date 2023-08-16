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
import stageReducer from "./reducers/stageReducer";
import clamp from "lodash/clamp";
import Cache from "./Cache";
import { DRAG_CONNECTION_ID, STAGE_ID } from "./constants";
import styles from "./styles.css";
import Selection from "./selection";
import useSelect from "./hooks/useSelect";
import getInitialNodes from "./reducers/nodes/getInitialNodes";
import { useVisibleNodes } from "./hooks/useVisibleNodes";

function getMatrix(element) {
  const values = element.style.transform.split(/\w+\(|\);?/);
  const transform = values[1].split(/,\s?/g).map(parseInt);

  return {
    x: transform[0],
    y: transform[1],
    z: transform[2],
  };
}

const defaultContext = {};

export const NodeEditor = forwardRef(
  (
    {
      nodeTypes = {},
      portTypes = {},
      context = defaultContext,
      connector,
      initialStageParams: _initialStageParams,
      circularBehavior,
      focusNode = { node: null, color: null },
      onFocusChange,
    },
    ref
  ) => {
    const editorId = useId();
    const {
      initialNodes = {},
      defaultNodes,
      temp: { state: tempState },
      initialNodesState,
    } = connector;

    const cache = useRef(new Cache());
    const stage = useRef();
    const editorRef = useRef();
    const [spaceIsPressed, setSpaceIsPressed] = useState(false);

    const [{ nodesState, currentStateIndex }, dispatchNodes] = useReducer(
      connectNodesReducer(nodesReducer, {
        nodeTypes,
        portTypes,
        cache,
        circularBehavior,
        context,
      }),
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

    useImperativeHandle(ref, () => ({
      getNodes() {
        return nodesState[currentStateIndex].state;
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
        editorId,
        nodeTypes
      );
    }, [currentStateIndex, nodesState, editorId, stageState]);

    const recalculateStageRect = () => {
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

    const handleDragEnd = (excludedNodeId, deltaX, deltaY, coords) => {
      if (selectedNodes.length > 0) {
        dispatchNodes({
          type: "SET_MULTIPLE_NODES_COORDINATES",
          nodesInfo: transformNodes(deltaX, deltaY),
        });
      } else {
        dispatchNodes({
          type: "SET_NODE_COORDINATES",
          ...coords,
          nodeId: excludedNodeId,
        });
      }
      triggerRecalculation();
    };

    const visible = useVisibleNodes({
      nodes: nodesState[currentStateIndex].state,
      wrapperRect: editorRef.current
        ? editorRef.current.getBoundingClientRect()
        : null,
      transform: [
        stageState.translate.x,
        stageState.translate.y,
        stageState.scale,
      ],
      selectedNodes,
    });

    const transformNodes = (deltaX, deltaY) => {
      const result = [];
      for (const nodeRef of selectedNodes) {
        if (nodeRef) {
          const oldPositions = nodeRef.style.transform.match(
            /translate3d\((?<x>.*?)px, (?<y>.*?)px, (?<z>.*?)px/
          );

          if (oldPositions) {
            const x = Number(oldPositions[1]) + deltaX;
            const y = Number(oldPositions[2]) + deltaY;
            nodeRef.style.transform = `translate3d(${x}px,${y}px,0px)`;

            result.push({
              nodeId: nodeRef.id,
              x,
              y,
            });
          }
        }
      }

      return result;
    };

    const dragSelectedNodes = useCallback(
      (excludedNodeId, deltaX, deltaY) => {
        if (selectedNodes.length > 0) {
          if (selectedNodes.find(({ id }) => excludedNodeId === id)) {
            transformNodes(deltaX, deltaY);

            recalculateConnections();
          } else {
            clearSelection();
          }
        }
      },
      [selectedNodes]
    );

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
                            nodes={nodesState[currentStateIndex].state}
                            onFocusChange={onFocusChange}
                            ref={editorRef}
                            editorId={editorId}
                            spaceIsPressed={spaceIsPressed}
                            scale={stageState.scale}
                            translate={stageState.translate}
                            spaceToPan={true}
                            dispatchStageState={dispatchStageState}
                            stageRef={stage}
                          >
                            {visible.map((node) => (
                              <Node
                                {...node}
                                isSelected={selectedNodes.find(
                                  ({ id }) => id === node.id
                                )}
                                ref={
                                  nodeRefs.find(([n]) => n.id === node.id)
                                    ? nodeRefs.find(
                                        ([n]) => n.id === node.id
                                      )[1]
                                    : createRef()
                                }
                                stageRect={stage}
                                hideControls={stageState.scale < 0.5}
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
