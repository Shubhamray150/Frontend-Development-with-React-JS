import React from "react";
import { Link } from "react-router-dom";

const CustomerService = () => {
  return (
    <div className="px-3.5 h-full flex-1 ">
      <div className="mb-5">
        <span className="text-2xl font-sans font-bold text-white ">
          Customer Services
        </span>
      </div>
      <div className="text-[#bdbdbd]">
        <ul>
          <li className="pb-2.5 mb-2.5">
            <Link to="/">Home</Link>
          </li>
          <li className="pb-2.5 mb-2.5">
            <Link to="/">Coming Soon</Link>
          </li>
          <li className="pb-2.5 mb-2.5">
            <Link to="/">Top Rated</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerService;
