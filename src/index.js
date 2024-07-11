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
import { useNodesAPI } from "./store";

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
    const { initialNodes = {}, defaultNodes, initialNodesState } = connector;

    const cache = useRef(new Cache());
    const stage = useRef();
    const editorRef = useRef();
    const [spaceIsPressed, setSpaceIsPressed] = useState(false);
    const [dragNodes, setDrag] = useState([]);

    const nodesApi = useNodesAPI();
    useEffect(() => {
      nodesApi.setNodeTypes(nodeTypes);
      nodesApi.setPortTypes(portTypes);
    }, []);

    useEffect(() => {
      defaultNodes?.map((node) => {
        nodesApi.addNode(node);
      });
    }, []);

    const recalculateStageRect = () => {
      stage.current = document
        .getElementById(`${STAGE_ID}${editorId}`)
        .getBoundingClientRect();
    };

    return (
      <PortTypesContext.Provider value={portTypes}>
        <NodeTypesContext.Provider value={nodeTypes}>
          <ContextContext.Provider value={context}>
            <CacheContext.Provider value={cache}>
              <EditorIdContext.Provider value={editorId}>
                <ControllerOptionsContext.Provider
                  value={connector.options || {}}
                >
                  <RecalculateStageRectContext.Provider
                    value={recalculateStageRect}
                  >
                    <Stage>
                      {Object.values(nodesApi.nodes).map((node) => (
                        <Node {...node} key={node.id} />
                      ))}
                      <Connections nodes={nodesApi.nodes} editorId={editorId} />
                      <div
                        className={styles.dragWrapper}
                        id={`${DRAG_CONNECTION_ID}${editorId}`}
                      />
                    </Stage>
                  </RecalculateStageRectContext.Provider>
                </ControllerOptionsContext.Provider>
              </EditorIdContext.Provider>
            </CacheContext.Provider>
          </ContextContext.Provider>
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
