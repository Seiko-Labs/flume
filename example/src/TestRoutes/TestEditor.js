import React, { useEffect } from "react";
import "normalize.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import ReactJson from "react-json-view";
import styled from "styled-components";
import {
  NodeEditor,
  useNodeEditorController,
  useRootEngine,
} from "node-editor";
import { engine, flumeBaseConfig } from "../flumeConfig";

const NodeWrapper = styled(Col)`
  height: 100vh;
  width: 100vw;
`;

const ControlsBlock = styled.div`
  position: fixed;
  display: inline-block;
  top: 10px;
  left: 10px;
  z-index: 9999;

  & > * {
    margin-right: 10px;
  }
`;

const TestEditor = () => {
  const [ns, , dispatch, connector, temp] = useNodeEditorController({
    defaultNodes: [
      {
        type: "start",
        x: 0,
        y: 0,
      },
    ],
    options: {
      openEditor: (data, onChange, nodeData) => {
        console.log(data, nodeData);
        onChange("I do work!");
      },
      // monacoPath:
      //   "file:///Z:/projects/electron/studio/src/node_modules/monaco-editor/min/vs",
    },
  });

  const res = useRootEngine(
    ns.nodesState ? ns.nodesState[ns.currentStateIndex].state : {},
    engine,
    { schema: ns.nodesState ? ns.nodesState[ns.currentStateIndex].state : {} }
  );

  useEffect(() => {
    console.log(temp);
  }, [temp.state]);

  return (
    <Container fluid>
      <Row>
        <NodeWrapper md={8} className="px-0">
          <ControlsBlock>
            <button onClick={() => dispatch("UNDO")}>Undo</button>
            <button onClick={() => dispatch("REDO")}>Redo</button>
            <button onClick={() => dispatch("COPY")}>Copy</button>
            <button onClick={() => dispatch("CUT")}>Cut</button>
            <button onClick={() => dispatch("PASTE")}>Paste</button>
            <button
              onClick={() =>
                dispatch("TOGGLE_NODES_VIEW", {
                  nodeIds: Object.keys(
                    ns.nodesState[ns.currentStateIndex].state
                  ),
                  doExpand: true,
                })
              }
            >
              Expand all nodes
            </button>
            <button
              onClick={() =>
                dispatch("ADD_NODE", {
                  type: "click",
                  x: 100,
                  y: 200,
                })
              }
            >
              Add "click" node
            </button>
            <button
              onClick={() =>
                dispatch("TOGGLE_NODES_VIEW", {
                  nodeIds: Object.keys(
                    ns.nodesState[ns.currentStateIndex].state
                  ),
                  doExpand: false,
                })
              }
            >
              Collapse all nodes
            </button>
            <label style={{ color: "white" }}>
              <input
                type="checkbox"
                onChange={(e) => {
                  temp.dispatch({
                    type: "TOGGLE_MULTISELECT",
                    doEnable: e.target.checked,
                  });
                }}
              />
              Toggle multiselect
            </label>
          </ControlsBlock>
          <NodeEditor
            portTypes={flumeBaseConfig.portTypes}
            nodeTypes={flumeBaseConfig.nodeTypes}
            connector={connector}
          />
        </NodeWrapper>
        <Col
          md={4}
          className="py-5 bg-light"
          style={{
            overflowY: "scroll",
            maxHeight: "100vh",
            filter: "invert(.85)",
          }}
        >
          <h2>Testing workflow</h2>

          <Card>
            <Card.Header>
              <Card.Title className="mb-0">RootEngine result</Card.Title>
            </Card.Header>
            <Card.Body>
              <ReactJson src={res.actionPort || res} name={null} />
              {/*{JSON.stringify(res)}*/}
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Header>
              <Card.Title className="mb-0">Flume nodes</Card.Title>
            </Card.Header>
            <Card.Body>
              {ns.nodesState && (
                <ReactJson src={ns.nodesState[ns.currentStateIndex].state} />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TestEditor;
