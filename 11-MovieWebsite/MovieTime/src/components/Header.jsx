import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <img
            className="w-36"
            src="https://movietimecinemas.in/static/media/movetime.236fd12064acbf3116ff54deba3018d8.svg"
            alt="logo"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <Link
            to="/"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/auth"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Login
          </Link>
          <Link
            to="/admin"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
