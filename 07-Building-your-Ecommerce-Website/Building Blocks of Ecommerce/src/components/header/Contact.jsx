import React from "react";
import Header from "./Header";
import Footer from "../footer/Footer";
import "./Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contactForm">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
