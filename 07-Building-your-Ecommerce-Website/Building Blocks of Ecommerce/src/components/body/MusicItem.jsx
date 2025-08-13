import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../Store/cartContext";
import { Button, Card } from "react-bootstrap";

const MusicItem = (props) => {
  const { product } = props;
  const cartCtx = useContext(cartContext);
  const buttonClickHandler = () => {
    event.preventDefault();
    cartCtx.addItem({ ...product, quantity: 1 });
    console.log(product);
    console.log(cartCtx);
  };

  return (
    <>
      <Card className="h-100 d-flex flex-column">
        <Link
          to={`/product-detail/${product.album}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Card.Img variant="top" src={product.imageUrl} />
          <Card.Body className="d-flex flex-column justify-content-center">
            <Card.Title className="fw-semibold text-center">
              {product.album}
            </Card.Title>
            <Card.Text className="text-center fw-bold">
              ${product.price}
            </Card.Text>
          </Card.Body>
        </Link>

        <Card.Body className="d-flex justify-content-center">
          <Button
            variant="info"
            className="text-white fw-bold mt-2 "
            onClick={buttonClickHandler}
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default MusicItem;
