import React from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <Container fluid>
      <Row className="App-header">
        <Col  md={{ span: 2, offset: 1 }}>
          Top gifs
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 2, offset: 5 }} md={{ span: 2, offset: 5 }}>
          <Image className="App-logo p-3" src={logo} fluid alt="logo" />
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 4, offset: 4}} md={{ span: 4, offset: 4}}>
          <Form.Control placeholder="Escribe algo..." />
        </Col>
        <Col className="pl-0">
          <Button sm md={ 2 } className="m-0" variant="primary">Buscar</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
