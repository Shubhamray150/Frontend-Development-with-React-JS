import React, { useContext, useState } from "react";
import "./Header.css";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Badge,
  Offcanvas,
} from "react-bootstrap";
import cartContext from "../../Store/cartContext";
import Cart from "./Cart/Cart";
import { Link } from "react-router-dom";

const Header = () => {
  const cartCtx = useContext(cartContext);
  const [showCart, setShowCart] = useState(false);
  const buttonClickHandler = () => {
    setShowCart((prevState) => !prevState);
  };

  const totalQuantity = cartCtx.cartItem.reduce((sum, item) => {
    return (sum += item.quantity);
  }, 0);

  return (
    <>
      <Offcanvas
        show={showCart}
        onHide={() => setShowCart(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart />
        </Offcanvas.Body>
      </Offcanvas>

      <Navbar bg="dark" variant="dark" expand="md" className="py-0">
        <Container className="position-relative justify-content-center">
          <Nav className="gap-5">
            <Nav.Link
              as={Link}
              to="/home"
              className="text-uppercase text-white"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/store"
              className="text-uppercase text-white"
            >
              Store
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="text-uppercase text-white"
            >
              About
            </Nav.Link>
          </Nav>
          <div className="position-absolute end-0 top-50 translate-middle-y">
            <Button
              variant="outline-info"
              size="sm"
              className="position-relative"
              onClick={buttonClickHandler}
            >
              Cart
              <Badge bg="light" text="dark" className="ms-2">
                {totalQuantity}
              </Badge>
            </Button>
          </div>
        </Container>
      </Navbar>
      <div className="bg-secondary pt-0 pb-5 mt-1">
        <Container className="text-center">
          <h1 className="text-white display-1 fw-bold pt-0 pb-5 times-font">
            The Generics
          </h1>
        </Container>
      </div>
    </>
  );
};

export default Header;
