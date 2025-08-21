import React, { useState } from "react";
import { useRef } from "react";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    if (passwordRef.current.value != confirmPassRef.current.value) {
      alert("password not matched");
      return;
    }
    if (!emailRef.current.value || !passwordRef.current.value) {
      alert("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDUlPrtzieL1-rYuqMB5AbB4njY95OiyqI",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true,
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        alert(data.error.message);
      } else {
        console.log("User has successfully signed up");
      }
    } catch (error) {
      console.log("error", error.message);
    }
    setLoading(false);
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPassRef.current.value = "";
  };
  return (
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
      <div className="flex flex-col">
        <input
          type="password"
          ref={confirmPassRef}
          placeholder="Confirm Password"
          id="confirmPass"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 "
        />
      </div>
      <div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full w-full hover:bg-blue-600 transition-colors">
          {loading ? <p>Loading...</p> : <p>Sign Up</p>}
        </button>
      </div>
    </form>
  );
};

export default Auth;
