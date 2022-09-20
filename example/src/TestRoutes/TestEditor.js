import { sample } from "lodash/collection";
import React, { useEffect, useState } from "react";
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
    margin-bottom: 10px;
  }
`;

const TestEditor = () => {
  const [focusNode, setFocusNode] = useState(null);
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

  useEffect(() => {
    console.log("Node state updated");
  }, [ns]);

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
            <br />
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
              Expand nodes
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
              Collapse nodes
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
            <br />
            <button
              onClick={() => {
                const node = sample(
                  Object.values(ns.nodesState[ns.currentStateIndex].state)
                );

                dispatch("HIGHLIGHT_NODE", {
                  node,
                });
              }}
            >
              Highlight random node
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
            {ns.nodesState &&
              Object.keys(ns.nodesState[ns.currentStateIndex].state).map(
                (node) => (
                  <button
                    onClick={() => {
                      console.log(node);
                      setFocusNode(node);
                    }}
                  >
                    {node}
                  </button>
                )
              )}
          </ControlsBlock>
          <NodeEditor
            focusNode={focusNode}
            onFocusChange={() => {
              setFocusNode(null);
            }}
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
              <ReactJson src={res} name={null} />
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
