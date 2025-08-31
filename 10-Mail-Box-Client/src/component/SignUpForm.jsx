import React from "react";
import { useRef } from "react";

const SignUpform = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
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
      console.log("User has successfully signed up.");
    } catch (error) {}

    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmRef.current.value = "";
  };

  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={formSubmitHandler}>
        <div>
          <input type="text" placeholder="Email" ref={emailRef} />
        </div>
        <div>
          <input type="text" placeholder="Password" ref={passwordRef} />
        </div>
        <div>
          <input type="text" ref={confirmRef} placeholder="Confirm Password" />
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpform;
