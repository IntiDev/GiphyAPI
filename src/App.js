import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import Common from './Common.js';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() { 
  const [arrayGifs, setArray] = useState([]);
  const [filterBy, setFilter] = useState("");

  useEffect(() => {
    fetchAPI(Common.Config.UrlTrending);
  }, []);

  const fetchAPI = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setArray(data.data);
    })
    .catch( error => console.error(error));
  };
 
  const handleClick = () => {
    const input = document.getElementById("inputValue");
    setFilter(input.value);
    fetchAPI(Common.Config.UrlSearch + input.value);
  }

  return (
    <Container fluid>
      <Row className="App-header">
        <Col  md={{ span: 2, offset: 1 }} className="App-text">
          Top gifs
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 6, offset: 3 }} sm={{ span: 4, offset: 4 }} md={{ span: 2, offset: 5 }}>
          <Image className="App-logo p-3" src={logo} fluid alt="logo" />
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 7, offset: 1 }} sm={{ span: 4, offset: 4}} md={{ span: 4, offset: 4}} lg={{ span: 3, offset: 4}}>
          <Form.Control id="inputValue" />
        </Col>
        <Col className="pl-0">
          <Button xs={3} sm={2} md={2} lg={2} className="m-0" variant="primary" onClick={handleClick}>Buscar</Button>
        </Col>
      </Row>
      <Row>
        { filterBy !== "" 
          ? <p className="App-text m-2"> Resultados para "{filterBy}" </p>
          : <p className="App-text m-2"> Top Gifs </p>
        }
      </Row>
      <Row>
        { arrayGifs.length > 0 && arrayGifs.map( item =>
           <Col xs={6} sm={4} md={4} lg={2} className="p-1" key={item.id}>
              <Image src={item.images.downsized_medium.url} className="Image-gif"/>
            </Col>
          )
        }
      </Row>
    </Container>
  );
}

export default App;
