import React from "react";
import Header from "../Header";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log(params.ProductID);

  return (
    <>
      <h1>hey there</h1>
      <p>{params.ProductID}</p>
    </>
  );
};

export default ProductDetail;
