import React, { useRef, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Editors from "./Editors";

const ComposeEmail = () => {
  const emailRef = useRef();
  const titleRef = useRef();
  const [letter, setLetter] = useState(null);
  const buttonClickHandler = async () => {
    if (emailRef.current.value.trim().length == 0) {
      return;
    }
    console.log(emailRef.current.value, titleRef.current.value);
    console.log(letter);
    const response = await fetch(
      "https://mailboxclient-d6e39-default-rtdb.firebaseio.com/mail.json",
      {
        method: "POST",
        body: JSON.stringify({
          sender: "sskk91015@gmail.com",
          receiver: emailRef.current.value,
          title: titleRef.current.value,
          body: letter,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response);

    const data = await response.json();
    console.log(data);
  };
  const letterText = (data) => {
    setLetter(data);
  };

  return (
    <Container>
      <div className="d-flex justify-content-end ">
        <Button variant="secondary">X</Button>
      </div>
      <Form>
        <Form.Group
          className="mb-3 d-flex border-bottom border-2 pb-2 align-items-center"
          controlId="formEmail"
        >
          <Form.Label className="me-2 mb-0" style={{ width: "30px" }}>
            To
          </Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            className="border-0"
            placeholder="Enter email"
          />
          <span>Cc/Bcc</span>
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex border-bottom border-2 pb-2 align-items-center"
          controlId="formEmail"
        >
          <Form.Control
            type="text"
            ref={titleRef}
            className="border-0 "
            placeholder="Title"
          />
        </Form.Group>
        <Editors onData={letterText} />
      </Form>
      <Button onClick={buttonClickHandler} variant="primary">
        Send
      </Button>
    </Container>
  );
};

export default ComposeEmail;
