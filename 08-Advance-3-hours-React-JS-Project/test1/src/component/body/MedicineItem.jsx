import React from "react";

const MedicineItem = ({ item }) => {
  console.log(item);

  return (
    <li className="flex gap-4 mb-3 ">
      <span>{item.name}</span>
      <span>{item.desc}</span>
      <span>{item.price}</span>
      <span>{item.quantity}</span>
      <button className="border bg-purple-500  font-medium border-black px-3 rounded-md">
        Add To Cart
      </button>
    </li>
  );
};

export default MedicineItem;
