import React, { useContext } from "react";
import shoeContext from "../../store/shoeContext";
import ShoeItem from "./ShoeItem";

const ShoeList = () => {
  const shoeCtx = useContext(shoeContext);

  return (
    <ul>
      {shoeCtx.shoeItem.map((item) => {
        return <ShoeItem item={item} key={item._id} />;
      })}
    </ul>
  );
};

export default ShoeList;
