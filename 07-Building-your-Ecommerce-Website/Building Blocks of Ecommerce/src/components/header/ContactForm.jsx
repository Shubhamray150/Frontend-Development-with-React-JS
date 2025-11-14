import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const nameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };

  const emailChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, email: event.target.value };
    });
  };

  const phoneChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, phone: event.target.value };
    });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://ecommersesharpener-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
      }
    );
    console.log(userInput);

    const responseData = await response.json();
    console.log(responseData);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="name">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={userInput.name}
          onChange={nameChangeHandler}
        />
      </div>
      <div className="email">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={userInput.email}
          onChange={emailChangeHandler}
        />
      </div>
      <div className="phone">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={userInput.phone}
          onChange={phoneChangeHandler}
        />
      </div>
      <div>
        <button className="action">SUBMIT</button>
      </div>
    </form>
  );
};

export default ContactForm;
