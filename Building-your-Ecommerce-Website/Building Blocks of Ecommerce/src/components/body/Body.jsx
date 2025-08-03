import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Body.css";

const productsArr = [
  {
    album: "Album 1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    album: "Album 2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    album: "Album 3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    album: "Album 4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Body = () => {
  return (
    <section
      style={{
        backgroundColor: "#f8f9fa",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <Container className="text-center">
        <h2 className="mb-4 fw-bold">MUSIC</h2>
        <Row>
          {productsArr.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-semibold">
                    {product.album}
                  </Card.Title>
                  <Card.Text className="text-center fw-bold">
                    ${product.price}
                  </Card.Text>
                  <Button variant="info" className="text-white fw-bold mt-2">
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Body;
