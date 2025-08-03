import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Body.css";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
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
        <div className="mb-4">
          <h2 className="metal-title">MUSIC</h2>
        </div>
      </Container>
    </section>
  );
};

export default Body;
