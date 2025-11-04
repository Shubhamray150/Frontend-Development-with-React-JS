import React from "react";
import { FaMapLocation } from "react-icons/fa6";
import { CiGift, CiCreditCard1 } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";

const menuItems = [
  { icon: <FaMapLocation className="w-6 h-6" />, label: "CINEMAS" },
  { icon: <CiGift className="w-6 h-6" />, label: "PROMOTIONS" },
  { icon: <CiCreditCard1 className="w-6 h-6" />, label: "VOUCHERS & CARDS" },
  { icon: <IoTicketOutline className="w-6 h-6" />, label: "BUY TICKETS" },
];

const Widget = () => {
  return (
    <div className="w-full bg-whiteshadow-md rounded-xl">
      <ul className="flex justify-between items-center relative">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="flex flex-col pt-4 items-center gap-1 h-24 text-sm flex-1 border border-gray-200 font-semibold cursor-pointer hover:text-red-500 "
          >
            <span>{item.icon}</span>
            <span className="text-sm text-center">{item.label}</span>
          </li>
        ))}
        <li className="relative  w-16 h-16 flex justify-center items-center">
          <div className="absolute inset-0 bg-[url('http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/themes/amy-movie/images/frontend/popcorn.png')] bg-cover bg-center " />
        </li>
      </ul>
    </div>
  );
};

export default Widget;
