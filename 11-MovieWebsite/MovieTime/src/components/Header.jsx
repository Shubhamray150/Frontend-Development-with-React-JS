import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-2 py-4 border flex justify-around">
      <div>
        <img
          className="w-36"
          src="https://movietimecinemas.in/static/media/movetime.236fd12064acbf3116ff54deba3018d8.svg"
          alt="logo"
        />
      </div>
      <div className="flex items-center justify-between w-1/4 ">
        <Link to="/">Home</Link>
        <Link to="/auth">Login</Link>
        <section className="">
          <Link to="/admin">Admin</Link>
        </section>
      </div>
    </header>
  );
};

export default Header;
