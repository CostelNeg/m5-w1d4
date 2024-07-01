import React from "react";
import { fantasy } from "../data/fantasy";
import { Container, Row, Col, Card, Button } from "react-bootstrap";



function BooksGrid() {
  return (
        <Row >
          {fantasy.map((book) => (
            <Col style={{padding:'0'}} lg={2} md={3} xs={6}>
              <Card  className="m-2">
                <Card.Img
                  className=" d-flex align-self-lg-center"
                  style={{ height: "200px" }}
                  variant="top"
                  src={book.img}
                />
                <Card.Body>
                  <Card.Title className="TextOverflow">{book.title}</Card.Title>
                  <Card.Text> Price :{book.price}</Card.Text>
                  <Container>
                  <Row>
                  <Col className="d-flex justify-content-between">
                  <Button variant="primary">Add to cart</Button>
                  <Button variant="success">Hide</Button>
                  </Col>
                  </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
  );
}
export default BooksGrid;
