import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <Container fluid>
      <Row className="App-header">
        <Col  md={{ span: 2, offset: 2 }}>
          Top gifs
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 2, offset: 5 }}>
          <Image className="App-logo p-3" src={logo} fluid alt="logo" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
