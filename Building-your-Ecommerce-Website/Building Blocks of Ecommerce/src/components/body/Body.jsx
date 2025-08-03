import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Body.css";
import Music from "./Music";
import Merch from "./Merch";

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
    <>
      <Music data={productsArr} />
      <Merch data={productsArr} />
    </>
  );
};

export default Body;
