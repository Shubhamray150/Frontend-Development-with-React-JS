import React from "react";

const ProductPage = ({ params }) => {
  const { id } = params;
  return (
    <div className="p-10">
      <h1>Product Id : {id}</h1>
    </div>
  );
};

export default ProductPage;
