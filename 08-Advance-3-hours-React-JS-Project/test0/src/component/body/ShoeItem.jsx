import React, { useContext } from "react";
import cartContext from "../../store/CartContext";
import shoeContext from "../../store/shoeContext";

const ShoeItem = (props) => {
  const shoeCtx = useContext(shoeContext);
  const cartCtx = useContext(cartContext);
  const { name, _id, desc, price, large, medium, small } = props.item;

  const buttonClickHandler = (size) => {
    let data = {
      name: name,
      desc: desc,
      price: price,
      large: 0,
      medium: 0,
      small: 0,
    };

    if (large <= 0 || medium <= 0 || small <= 0) {
      console.log("cant add");
      return;
    }

    console.log(size);

    data = { ...data, [size]: 1 };
    shoeCtx.removeShoeItem(_id, size, data);
    cartCtx.addCartItem(data);
  };

  return (
    <li className="w-3/5 mx-auto my-4 ">
      <div className="border flex items-center justify-between px-4 py-2 rounded-xl shadow-md ">
        <div className="flex flex-col items-start">
          <span className="font-bold text-lg uppercase">{name}</span>
          <span className="text-gray-700 font-medium capitalize">{desc}</span>
          <span className="text-red-600 font-bold text-lg">₹ {price}</span>
        </div>
        <section className="p-1">
          <button
            onClick={() => buttonClickHandler("large")}
            className="rounded p-2 text-white  bg-blue-600 font-semibold cursor-pointer"
          >
            large
            <span className="rounded text-blue-700 bg-slate-200 font-bold px-2 py-1 mx-1">
              {large}
            </span>
          </button>
          <button
            onClick={() => buttonClickHandler("medium")}
            className=" rounded p-2 text-white ml-4 bg-blue-600 font-semibold cursor-pointer "
          >
            medium
            <span className=" rounded text-blue-700 bg-white font-bold px-2 py-1 mx-1">
              {medium}
            </span>
          </button>
          <button
            onClick={() => buttonClickHandler("small")}
            className=" rounded p-2 text-white  ml-4 bg-blue-600 font-semibold cursor-pointer "
          >
            small
            <span className=" rounded text-blue-700 bg-white font-bold px-2 py-1 mx-1">
              {small}
            </span>
          </button>
        </section>
      </div>
    </li>
  );
};

export default ShoeItem;
