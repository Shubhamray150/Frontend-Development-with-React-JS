import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { posterImage } from "../utils/data";

const Authentication = () => {
  const [data, setData] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => (prev === posterImage.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-[#030c17] ">
        <div className="flex flex-row border w-[65%] bg-[#071526] overflow-hidden mx-auto mt-8 rounded-2xl h-[90%] shadow-xl shadow-gray-500/10 ">
          <div className=" h-full">
            <img
              src={posterImage[data]?.image}
              className="object-cover h-full w-110  object-top"
              alt=""
            />
          </div>
          <div className="p-16 flex-1">
            <div className="flex flex-col gap-4">
              <span className="text-white font-semibold text-4xl">
                Welcome Back,
              </span>
              <span className="text-white">Sign in to your account</span>
            </div>
            <form className="w-full my-8 flex flex-col gap-8">
              <div className="text-gray-400 w-full">
                <label className="text-lg" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-400 w-full rounded-lg px-1 py-3 block mt-2"
                />
              </div>
              <div className="text-gray-400 w-full">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="border border-gray-400 w-full rounded-lg px-1 py-3 block mt-2"
                />
              </div>
              <div className="text-gray-500 ml-auto">
                <Link to={"/forgot-password"}>Forgot password?</Link>
              </div>
              <div className="text-white">
                <button className="w-full bg-red-500 py-2 rounded-md font-semibold cursor-pointer">
                  Sign In
                </button>
              </div>
            </form>
            <div className="text-center">
              <button className="text-gray-500 cursor-pointer">
                Don't have an account?
                <span className="text-red-600 font-semibold">Sign up</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
