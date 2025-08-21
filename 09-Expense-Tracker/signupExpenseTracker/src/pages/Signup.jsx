import React from "react";
import Auth from "../Auth/Auth";

const Signup = () => {
  return (
    <>
      <div className="w-96 mx-auto mt-24 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
        <h1 className="text-center text-3xl font-semibold mt-8 mb-12">
          Sign Up
        </h1>
        <Auth />
      </div>
      <button className="block mx-auto mt-4 shadow-md border border-gray-400 rounded-lg  w-96 p-4 bg-green-100 hover:bg-green-200 hover:border-gray-500 ">
        Have an account? Login
      </button>
    </>
  );
};

export default Signup;
