import React from "react";
import { Redirect } from "react-router-dom";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../Store/AuthContext";

const Login = () => {
  const AuthCtx = useContext(AuthContext);
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkEwWiv_6ACWxYKCBben6-sb4KbPeIB2s",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error.message);
          console.log("error", data.error.message);
        } else {
          AuthCtx.login(data.idToken);
          history.replace("/store");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="userName">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailInputRef} />
      </div>
      <div className="password">
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" ref={passwordInputRef} />
      </div>
      <div className="action">
        <button className="LogIn">Log In</button>
      </div>
    </form>
  );
};

export default Login;
