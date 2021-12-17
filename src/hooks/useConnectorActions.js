import _ from "lodash";
import { useEffect } from "react";
import { clearConnections } from "../connectionCalculator";

const useConnectorActions = ({
  dispatchNodes,
  connector: {
    action: connectorAction,
    temp: { state: tempState, dispatch: dispatchTemp },
  },
  triggerRecalculation,
  selectedNodes,
  stageState,
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

  return null;
};

export default useConnectorActions;
