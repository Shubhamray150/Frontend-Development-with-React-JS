import React, { useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ResetPassword = () => {
  const emailRef = useRef();
  const resetSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDUlPrtzieL1-rYuqMB5AbB4njY95OiyqI",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: emailRef.current.value,
          }),
        }
      );
      const data = await response.json();
      if (data.email) {
        alert("Reset link sent successfully!");
      }
    } catch (erro) {}
  };
  return (
    <div className="w-[30%] mx-auto mt-24 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h1 className="text-center mb-8 font-semibold text-2xl">
        Expense Tracker
      </h1>
      <form
        className="flex flex-col w-full justify-center items-center space-y-4"
        onSubmit={resetSubmitHandler}
      >
        <label className="w-[90%] text-gray-700" htmlFor="resetEmail">
          Enter the email with which you have registered.
        </label>
        <input
          type="email"
          ref={emailRef}
          id="resetEmail"
          placeholder="Enter Registered Email..."
          className="border border-gray-400 w-[90%] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-red-500 hover:bg-red-600 mt-2 py-2 rounded w-[60%] text-white font-semibold transition-colors">
          Send Link
        </button>
      </form>
      <div className="w-full flex justify-center mt-4 mb-4 text-sm">
        <Link to="/" className="text-blue-500 hover:underline">
          Already a user? Login
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
