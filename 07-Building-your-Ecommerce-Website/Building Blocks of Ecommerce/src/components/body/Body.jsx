import React from "react";
import "./Body.css";
import Music from "./Music";
import Merch from "./Merch";
import productsArr from "../../data/product";

const Body = () => {
  return (
    <>
      <Music data={productsArr} />
      <Merch data={productsArr} />
    </>
  );
};

export default Body;
