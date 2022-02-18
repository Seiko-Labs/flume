import _ from "lodash";
import { useEffect, useMemo } from "react";
import { clearConnections } from "../connectionCalculator";

const useConnectorActions = ({
  dispatchNodes,
  connector: {
    action: connectorAction,
    setNodesState,
    temp: { state: tempState, dispatch: dispatchTemp },
  },
  triggerRecalculation,
  selectedNodes,
  stageState,
  dispatchStageState,
  nodesState,
  currentStateIndex,
  setSelectedNodes,
}) => {
  useEffect(() => {
    if (connectorAction) {
      const { type, data } = connectorAction();

      switch (type) {
        case "UNDO":
          dispatchNodes({
            type: "UNDO_CHANGES",
          });

          clearConnections();
          triggerRecalculation();
          break;
        case "REDO":
          dispatchNodes({
            type: "REDO_CHANGES",
          });

          clearConnections();
          triggerRecalculation();
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
        case "DEL":
          dispatchNodes({
            type: "DEL_NODES",
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
        case "HIGHLIGHT_NODE":
          const {
            node: { x, y, id },
          } = data;

          dispatchStageState({ type: "SET_SCALE", scale: 1.2 });
          dispatchStageState({
            type: "SET_TRANSLATE",
            translate: {
              x: x + 150,
              y: y + 75,
            },
          });
          setSelectedNodes([id]);

          break;
        default:
          break;
      }
    }
  }, [connectorAction, selectedNodes]);

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

  useMemo(() => {
    nodesState[Math.max(currentStateIndex - 1, 0)].state &&
      nodesState[currentStateIndex].state !==
        nodesState[Math.max(currentStateIndex - 1, 0)].state &&
      setNodesState &&
      setNodesState({ nodesState, currentStateIndex });
  }, [nodesState, currentStateIndex, setNodesState]);

  return null;
};

useConnectorActions.displayName = "useConnectorActions";

export default useConnectorActions;
