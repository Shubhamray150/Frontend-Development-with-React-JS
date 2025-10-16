import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header className="sticky top-0 z-[100] bg-gradient-to-b from-purple-200 to-white pb-0  py-[20px] pb-[2rem] px-[4rem] ">
      <div className="flex gap-x-3 items-center justify-between">
        <Link to="/">
          <img
            src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.28.1/images/header/primary-logo.svg"
            alt=""
          />
        </Link>
        <div>
          <button className="bg-gray-500 rounded-xl p-1 text-white ">
            Super Saver
          </button>
        </div>
        <div>
          <button className="cursor-pointer">
            <h3 className="text-[12px] font-semibold flex items-center gap-1">
              Select Location
              <span>
                <FaAngleDown />
              </span>
            </h3>
          </button>
        </div>
        <div className="bg-white rounded-lg px-4 py-2 border border-gray-300 flex-1  ">
          <Link className="flex items-center gap-4">
            <IoSearch size={18} />
            <span className="flex items-center text-gray-500 gap-4">
              <span className="text-gray-500 text-xs font-semibold">
                Search for
              </span>
              <span>kurkure</span>
            </span>
          </Link>
        </div>
        <div>
          <Link to="/buy-pass">
            <img
              src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.28.1/images/daily/HPDailyPass.svg"
              alt="daily image"
            />
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to="/account">
            <div className="flex flex-col items-center ">
              <CgProfile size={20} />
              <span className="text-xs">Profile</span>
            </div>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to="/account">
            <div className="flex flex-col items-center ">
              <AiOutlineShoppingCart size={20} />
              <span className="text-xs">Cart</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
