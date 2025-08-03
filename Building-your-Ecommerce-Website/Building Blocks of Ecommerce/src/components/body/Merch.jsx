import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Music = (props) => {
  return (
    <section
      style={{
        backgroundColor: "#f8f9fa",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <Container className="text-center">
        <h2 className="mb-4 fw-bold">Merch</h2>
        <Row>
          {props.data.map((product, index) => (
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

export default Music;
