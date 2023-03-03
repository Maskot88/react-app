import React from "react";
import "./App.css";
import Col from "./components/Grid/Col/index";
import Container from "./components/Grid/Container";
import Row from "./components/Grid/Row";
import StopWatch from "./components/StopWatch";
import Calendar from "./components/Calendar";

const App = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col colNum={8}>
            <Calendar />
          </Col>
          <Col colNum={4}>
            <StopWatch />
          </Col>
          <Col colNum={4}>
            <StopWatch />
          </Col>
          <Col colNum={4}>
            <StopWatch />
          </Col>
          <Col colNum={4}>
            <Calendar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
