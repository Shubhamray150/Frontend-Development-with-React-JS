import React, { useState } from "react";
import { useRef } from "react";

const Auth = () => {
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
        alert(data.error.message);
      } else {
        console.log("User has successfully signed up");
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
      <div className="w-96 mx-auto mt-24 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
        <h1 className="text-center text-3xl font-semibold mt-8 mb-12">
          {isLogIn ? "Login" : "Sign Up"}
        </h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <input
              placeholder="Email"
              ref={emailRef}
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 "
            />
          </div>
          <div className="flex flex-col">
            <input
              placeholder="Password"
              type="password"
              ref={passwordRef}
              id="password"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 "
            />
          </div>
          {!isLogIn && (
            <div className="flex flex-col">
              <input
                type="password"
                ref={confirmPassRef}
                placeholder="Confirm Password"
                id="confirmPass"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 "
              />
            </div>
          )}
          <div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full w-full hover:bg-blue-600 transition-colors">
              {loading ? "Loading..." : isLogIn ? "Login" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
      <button
        onClick={switchAuthModeHandler}
        className="block mx-auto mt-4 shadow-md border border-gray-400 rounded-lg  w-96 p-4 bg-green-100 hover:bg-green-200 hover:border-gray-500 "
      >
        {isLogIn ? "Don't have an account? Sign up" : "Have an account? Login"}
      </button>
    </>
  );
};

export default Auth;
