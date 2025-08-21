import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="flex w-full justify-between items-center mt-4 mb-4 p-2 border-b border-gray-400">
        <h1 className="text-xl italic">Welcome to Expense Tracker</h1>

        <div className="italic rounded-xl text-center px-3 bg-red-100 py-1 text-sm">
          Your profile is Incomplete.{" "}
          <Link to="/update" className="text-blue-800 ml-1">
            Complete now
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
