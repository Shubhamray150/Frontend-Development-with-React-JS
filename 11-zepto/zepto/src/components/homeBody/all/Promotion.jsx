import React from "react";
import { Link } from "react-router-dom";

const Promotion = () => {
  return (
    <div className="flex justify-center w-full my-6">
      <Link>
        <img
          className="w-full max-w-[1200px] rounded-2xl "
          src="https://cdn.zeptonow.com/production/tr:w-1280,ar-3840-897,pr-true,f-auto,q-80/inventory/banner/f5e466c9-1682-4756-bafa-8c67a9f19a07.png"
          alt="promotion banner"
        />
      </Link>
    </div>
  );
};

export default Promotion;
