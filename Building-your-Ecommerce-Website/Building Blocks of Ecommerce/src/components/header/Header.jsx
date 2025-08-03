import React from "react";
import "./Header.css";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" className="py-0">
        <Container className="position-relative justify-content-center">
          <Nav className="gap-5">
            <Nav.Link href="#" className="text-uppercase text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-uppercase text-white">
              Store
            </Nav.Link>
            <Nav.Link href="#" className="text-uppercase text-white">
              About
            </Nav.Link>
          </Nav>
          <div className="position-absolute end-0 top-50 translate-middle-y">
            <Button
              variant="outline-info"
              size="sm"
              className="position-relative"
            >
              Cart
              <Badge bg="light" text="dark" className="ms-2">
                0
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
