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
      <div className="flex items-center justify-between w-1/4 border">
        <Link>Home</Link>
        <Link>Login</Link>
        <section className="">
          <label className=" absolute" htmlFor="">
            <img
              src="https://www.svgrepo.com/show/192244/man-user.svg"
              alt="user icon"
              width={24}
              height={24}
            />
          </label>
          <select className="w-10" name="role" id="role">
            <option value="" hidden selected></option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </section>
      </div>
    </header>
  );
};

export default Header;
