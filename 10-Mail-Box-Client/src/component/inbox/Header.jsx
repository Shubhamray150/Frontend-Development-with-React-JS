import React from "react";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex items-center bg-violet-500  p-2">
      <h1 className="w-[20%] text-center text-white">Mail Box </h1>
      <div className="w-[80%] flex items-center">
        <form className="flex w-full items-center gap-1">
          <input
            className="w-[55%] border bg-white px-2 py-2 rounded text-black"
            type="text"
            placeholder="Find messages, documents, photos or people"
          />
          <button className="w-[70px] text-white flex rounded py-2 h-[42px] items-center justify-center bg-violet-400  ">
            <IoIosSearch size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
