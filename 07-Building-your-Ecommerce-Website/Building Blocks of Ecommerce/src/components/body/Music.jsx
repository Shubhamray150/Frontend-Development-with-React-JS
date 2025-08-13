import React, { useContext } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import MusicItem from "./MusicItem";

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
        <h2 className="mb-4 fw-bold">MUSIC</h2>
        <Row>
          {props.data.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <MusicItem product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Music;
