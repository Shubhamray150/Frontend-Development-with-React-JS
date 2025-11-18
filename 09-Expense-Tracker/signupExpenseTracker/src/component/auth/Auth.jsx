import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginService, signupService } from "../../services/authService";
import { authActions } from "../../store/redux/authReducer";
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

const Auth = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [isLogIn, setIsLogIn] = useState(true);

  const dispatch = useDispatch();

  const switchAuthModeHandler = () => {
    setIsLogIn((prevData) => !prevData);
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!isLogIn) {
      if (userInput.password.trim() !== userInput.confirmPassword.trim()) {
        alert("password not matched");
        return;
      }
    }
    if (!userInput.email.trim() || !userInput.password.trim()) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      const data = isLogIn
        ? await loginService(userInput.email, userInput.password)
        : await signupService(userInput.email, userInput.password);

      if (data.error) {
        alert(data.error.message);
      } else {
        dispatch(authActions.login(data.idToken));
        if (!isLogIn) alert("Account Created Successfully");
      }
    } catch (error) {
      console.log("Error", error.message);
    }

    setLoading(false);

    setUserInput({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <>
      <div className="w-96 mx-auto mt-24 p-8 border border-gray-200 rounded-xl h- shadow-lg bg-white">
        <h1 className="text-center text-3xl font-semibold mb-10">
          {isLogIn ? "Login" : "Sign Up"}
        </h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <input
            onChange={inputChangeHandler}
            value={userInput.email}
            name="email"
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />

          <input
            onChange={inputChangeHandler}
            name="password"
            value={userInput.password}
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />

          {!isLogIn && (
            <input
              onChange={inputChangeHandler}
              value={userInput.confirmPassword}
              name="confirmPassword"
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
