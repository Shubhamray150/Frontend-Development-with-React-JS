import React from "react";
import Promotion from "./Promotion";
import OfferSection from "./OfferSection";
import BuyAgain from "./BuyAgain";

const All = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[1200px] ">
        <Promotion />
        <OfferSection />
        <BuyAgain />
      </div>
    </div>
  );
};

export default All;
