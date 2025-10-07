import { useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const SignUpForm = () => {
  const [isSignup, setIsSignUp] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const confirm = confirmRef.current?.value.trim();

    if (isSignup) {
      if (!email || !password || !confirm) {
        alert("Please fill all fields");
        return;
      }
      if (password !== confirm) {
        alert("Passwords do not match");
        return;
      }
    } else {
      if (!email || !password) {
        alert("Please fill email and password");
        return;
      }
    }

    try {
      const response = await fetch(
        isSignup
          ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmNzZHgpzW8H0G3yGk0jW9wyL2eogbERk"
          : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmNzZHgpzW8H0G3yGk0jW9wyL2eogbERk",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message || "Authentication failed");
      }

      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error.message);
      alert(error.message);
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";
    if (isSignup) confirmRef.current.value = "";
  };

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="border rounded p-4 border-secondary"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h3 className="mb-4 text-center">{isSignup ? "Signup" : "Login"}</h3>
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

          <Button variant="primary" type="submit" className="w-100">
            {isSignup ? "Signup" : "Login"}
          </Button>
        </Form>
      </div>

      <Button
        onClick={() => setIsSignUp(!isSignup)}
        className="mt-3"
        style={{
          backgroundColor: "#d4fed4ff",
          color: "#000",
          border: "1px solid gray",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        {isSignup ? "Have an account? Login" : "Don't have an account? Signup"}
      </Button>
    </Container>
  );
};

export default SignUpForm;
