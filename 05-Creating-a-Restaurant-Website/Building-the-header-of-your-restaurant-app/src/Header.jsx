import React from "react";
import "./Header.css";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="header">
      <h1>ReactMeals</h1>
      <button className="headerBtn">
        <FaCartShopping className="cart-icon" />
        Your Cart
        <span className="button-span">{0}</span>
      </button>
    </div>
  );
};

export default Header;
