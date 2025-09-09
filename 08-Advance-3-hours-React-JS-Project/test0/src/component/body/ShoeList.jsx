import React, { useContext } from "react";
import shoeContext from "../../store/shoeContext";
import ShoeItem from "./ShoeItem";

const ShoeList = () => {
  const shoeCtx = useContext(shoeContext);

  return (
    <ul className="bg-white w-[60%] mx-auto rounded-xl px-4 py-2 shadow-md mb-12">
      {shoeCtx.shoeItem.map((item) => {
        return <ShoeItem item={item} key={item._id} />;
      })}
    </ul>
  );
};

export default ShoeList;
