import { useRef } from "react";
import { Link } from "react-router-dom";

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-120 mx-auto mt-24 p-8 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg">
      <h1 className="text-center mb-10 font-semibold text-3xl text-gray-800 ">
        Expense Tracker
      </h1>

      <form
        className="flex flex-col w-full items-center space-y-5"
        onSubmit={resetSubmitHandler}
      >
        <label htmlFor="resetEmail" className="w-[90%] text-gray-700 text-sm">
          Enter the email you registered with:
        </label>

        <input
          type="email"
          ref={emailRef}
          id="resetEmail"
          placeholder="Registered Email Address"
          className="border border-gray-300 bg-gray-50 w-11/12 rounded-lg px-3 py-2 focus:bg-white transition focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        <button
          className="bg-red-500 hover:bg-red-600 mt-2 py-2 rounded-lg w-11/12 text-white font-semibold transition cursor-pointer shadow-sm hover:shadow-lg
        hover:font-bold
        "
        >
          Send Link
        </button>
      </form>

      <div className="w-full flex justify-center mt-6 mb-2 text-sm">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800  underline transition"
        >
          Already a user? Login
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
