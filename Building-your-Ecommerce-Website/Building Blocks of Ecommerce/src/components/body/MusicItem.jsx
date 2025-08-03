import React, { useContext } from "react";

import cartContext from "../../Store/cartContext";
import { Button, Card } from "react-bootstrap";

const MusicItem = (props) => {
  const { product } = props;
  const cartCtx = useContext(cartContext);
  const buttonClickHandler = () => {
    cartCtx.addItem({ ...product, quantity: 1 });
    console.log(product);
  };

  return (
    <>
      <Card className="h-100">
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="fw-semibold">{product.album}</Card.Title>
          <Card.Text className="text-center fw-bold">
            ${product.price}
          </Card.Text>
          <Button
            variant="info"
            className="text-white fw-bold mt-2"
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
