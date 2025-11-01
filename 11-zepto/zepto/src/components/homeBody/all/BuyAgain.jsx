import React from "react";
import SubNavBar from "../../layout/homeLayout/SubNavBar";
import { buyAgain } from "../../../data/appData";

const BuyAgain = () => {
  return (
    <div>
      <div className="px-[1rem] mt-[0.75rem] mb-[1rem]">
        <span className="font-bold text-[16px] ">Buy Again</span>
      </div>
      <SubNavBar data={buyAgain} />
    </div>
  );
};

export default BuyAgain;
