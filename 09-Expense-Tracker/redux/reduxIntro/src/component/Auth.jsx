import classes from "./Auth.module.css";
import { authActions } from "../store";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const Auth = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const Dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
    Dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" ref={emailRef} id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" ref={passwordRef} id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
