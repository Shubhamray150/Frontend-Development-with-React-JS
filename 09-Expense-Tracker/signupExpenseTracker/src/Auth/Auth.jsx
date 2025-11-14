import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/redux/authReducer";

const Auth = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [isLogIn, setIsLogIn] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogIn((prevData) => !prevData);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!isLogIn) {
      if (passwordRef.current.value !== confirmPassRef.current.value) {
        alert("password not matched");
        return;
      }
    }

    if (!emailRef.current.value || !passwordRef.current.value) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const ApiUrl = isLogIn
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDUlPrtzieL1-rYuqMB5AbB4njY95OiyqI"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDUlPrtzieL1-rYuqMB5AbB4njY95OiyqI";

    try {
      const response = await fetch(ApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error.message || "Authentication Failed");
      } else {
        dispatch(authActions.login(data.idToken));
        if (!isLogIn) alert("Account Created Successfully!");
      }
    } catch (error) {
      console.log("Error", error.message);
    }

    setLoading(false);

    emailRef.current.value = "";
    passwordRef.current.value = "";
    if (!isLogIn && confirmPassRef.current) confirmPassRef.current.value = "";
  };
  return (
    <>
      <div className="w-96 mx-auto mt-24 p-8 border border-gray-200 rounded-xl h- shadow-lg bg-white">
        <h1 className="text-center text-3xl font-semibold mb-10">
          {isLogIn ? "Login" : "Sign Up"}
        </h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />

          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />

          {!isLogIn && (
            <input
              ref={confirmPassRef}
              type="password"
              placeholder="Confirm Password"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
          )}

          <button
            disabled={loading}
            className={`mt-3 text-white px-4 py-2 rounded-full w-full  ${
              loading ? "bg-blue-300 " : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Loading..." : isLogIn ? "Login" : "Sign Up"}
          </button>
        </form>

        {isLogIn && (
          <div className="text-center mt-4">
            <Link
              className="text-blue-600 underline hover:text-blue-800"
              to="/ResetPassword"
            >
              Forgot Password?
            </Link>
          </div>
        )}
      </div>

      <button
        onClick={switchAuthModeHandler}
        className="block mx-auto mt-5 w-96 p-4 cursor-pointer bg-green-200 border border-gray-300 rounded-lg shadow hover:bg-green-300 transition text-center font-semibold"
      >
        {isLogIn ? "Don't have an account? Sign up" : "Have an account? Login"}
      </button>
    </>
  );
};

export default Auth;
