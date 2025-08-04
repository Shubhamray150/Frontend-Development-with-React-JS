import React from "react";
import Header from "./Header";
import Footer from "../footer/Footer";
import { Container, Button, Table } from "react-bootstrap";

const Home = () => {
  const data = [
    { date: "JUL 16", city: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
    { date: "JUL 19", city: "TORONTO, ON", venue: "BUDWEISER STAGE" },
    { date: "JUL 22", city: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
    { date: "JUL 29", city: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
    { date: "AUG 2", city: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
    { date: "AUG 7", city: "CONCORD, CA", venue: "CONCORD PAVILION" },
  ];
  return (
    <>
      <Header />
      <section className="text-center my-5">
        <h2 className="mb-4">About</h2>
      </section>

      <section className="text-center my-5">
        <h2>TOURS</h2>
        <Container>
          {data.map((tour, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center border-bottom py-2"
            >
              <span>{tour.date}</span>
              <span>{tour.city}</span>
              <span>{tour.venue}</span>
              <Button variant="info">BUY TICKETS</Button>
            </div>
          ))}
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Home;
