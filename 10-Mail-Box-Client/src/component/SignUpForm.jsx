import { useRef, useState } from "react";

import { Form, Button, Container } from "react-bootstrap";

const SignUpform = () => {
  const [isSignup, setIsSignUp] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(
      emailRef.current.value,
      passwordRef.current.value,
      confirmRef.current.value
    );
    if (
      emailRef.current.value.trim() == "" ||
      passwordRef.current.value.trim() == "" ||
      confirmRef.current.value.trim() == ""
    ) {
      return;
    }

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmNzZHgpzW8H0G3yGk0jW9wyL2eogbERk",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("User has successfully signed up.");
      }
      console.log(data);
    } catch (error) {}

    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmRef.current.value = "";
  };

  return (
    <>
      <Container
        className="border rounded p-4 border-secondary"
        style={{ maxWidth: "400px", marginTop: "150px" }}
      >
        <h3 className="mb-4">{isSignup ? "Signup" : "Login"}</h3>
        <Form onSubmit={formSubmitHandler}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="border-secondary"
              type="email"
              ref={emailRef}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="border-secondary"
              type="password"
              ref={passwordRef}
              placeholder="Password"
            />
          </Form.Group>
          {isSignup && (
            <Form.Group className="mb-3" controlId="formConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                className="border-secondary"
                ref={confirmRef}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Group>
          )}

          <Button variant="primary" type="submit">
            Signup
          </Button>
        </Form>
      </Container>
      <div className="d-flex justify-content-center">
        <Button
          onClick={() => {
            setIsSignUp(!isSignup);
          }}
          className="mt-3"
          style={{
            backgroundColor: "#d4fed4ff",
            color: "#000",
            border: "1px solid gray",
            width: "400px",
            maxWidth: "400px",
          }}
        >
          {isSignup
            ? "have an account? Login"
            : "Don't have an account? Signup"}
        </Button>
      </div>
    </>
  );
};

export default SignUpform;
