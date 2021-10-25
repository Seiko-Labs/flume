import React from "react";
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

const TestEditor = () => {
  const [ns, , , connector] = useNodeEditorController({
    defaultNodes: [
      {
        type: "start",
        x: 0,
        y: 0,
      },
    ],
  });

  const res = useRootEngine(
    ns.nodesState ? ns.nodesState[ns.currentStateIndex].state : {},
    engine,
    { schema: ns.nodesState ? ns.nodesState[ns.currentStateIndex].state : {} }
  );

  return (
    <Container fluid>
      <Row>
        <NodeWrapper md={8} className="px-0">
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
              <ReactJson src={res.actionPort || res} />
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
