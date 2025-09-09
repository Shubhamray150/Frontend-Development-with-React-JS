import React from "react";

const CartItem = ({ item, onClose }) => {
  const cost =
    item.price * item.large +
    item.price * item.medium +
    item.price * item.small;

  return (
    <div className="flex px-6 py-2 justify-between">
      <div className="flex flex-col  items-start">
        <h1 className="uppercase font-bold">{item.name}</h1>
        <p className="capitalize">{item.desc}</p>
      </div>
      <div className=" flex-1 flex justify-center gap-2  items-center w-[150px]">
        <div className="flex border border-gray-400 gap-1 rounded-md px-2 py-1">
          <h1>L - </h1>
          <span>{item.large}</span>
        </div>
        <div className="flex border border-gray-400 gap-1 rounded-md px-2 py-1">
          <h1>M - </h1>
          <span>{item.medium}</span>
        </div>
        <div className="flex border border-gray-400 gap-1 rounded-md px-2 py-1">
          <h1>S - </h1>
          <span>{item.small}</span>
        </div>
      </div>
      <div className="font-semibold">{cost}</div>
    </div>
  );
};

export default CartItem;
