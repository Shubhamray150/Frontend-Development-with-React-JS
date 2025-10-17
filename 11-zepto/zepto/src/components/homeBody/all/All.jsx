import React from "react";
import Promotion from "./Promotion";
import OfferSection from "./OfferSection";
import BuyAgain from "./BuyAgain";

const All = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Promotion />
      <OfferSection />
      <BuyAgain />
    </div>
  );
};

export default All;
