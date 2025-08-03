import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { FaFacebook, FaSpotify, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Navbar bg="info" variant="light" className="text-center p-3 mt-5 h-100">
      <Container>
        <Row className="w-100">
          <Col
            xs={12}
            md={4}
            className="text-white text-md-end text-center fw-bolder fs-1"
          >
            The Generics
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-md-end justify-content-center align-items-center mt-2 mt-md-0"
          >
            <a href="https://www.youtube.com" target="_blank">
              <FaYoutube size={28} color="red" className="mx-2 me-5" />
            </a>
            <a href="https://www.spotify.com" target="_blank">
              <FaSpotify size={28} color="white" className="mx-2 me-5" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <FaFacebook size={28} color="white" className="mx-2 me-5" />
            </a>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Footer;
