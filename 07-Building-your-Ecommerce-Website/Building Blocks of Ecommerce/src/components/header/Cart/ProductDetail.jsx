import React from "react";
import Header from "../Header";
import { useParams } from "react-router-dom";
import productsArr from "../../../data/product";
import Footer from "../../footer/Footer";

const ProductDetail = () => {
  const params = useParams();
  console.log(params.ProductID);

  const product = productsArr.filter((item) => params.ProductID == item.album);
  console.log(product);

  return (
    <>
      <div className="container py-5">
        <div className="row g-4 align-items-start p-4 rounded shadow-sm">
          <div className="col-md-5 text-center">
            <img
              src={product[0].imageUrl}
              alt={product[0].title}
              className="img-fluid rounded shadow-sm"
            />
          </div>

          <div className="col-md-7">
            <h2 className="fw-bold mb-3">{product[0].title}</h2>
            <h5 className="text-muted mb-3">Album: {product[0].album}</h5>
            <h3 className="text-success mb-4">₹ {product[0].price}</h3>

            <p className="text-secondary mb-4" style={{ lineHeight: "1.7" }}>
              This album features premium-quality tracks with high-resolution
              audio and beautifully designed cover art. A must-have for every
              music lover!
            </p>

            <button className="btn btn-primary px-4 py-2">Add to Cart</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
