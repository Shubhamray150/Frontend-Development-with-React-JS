import React from "react";
import ShoeForm from "./ShoeForm";

const Header = () => {
  return (
    <div className="flex items-center w-full  px-4 py-2">
      <div className="flex-1 flex justify-center">
        <ShoeForm />
      </div>
    </div>
  );
};

export default Header;
