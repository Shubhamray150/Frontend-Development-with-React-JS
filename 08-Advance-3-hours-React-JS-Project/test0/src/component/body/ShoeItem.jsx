import React from "react";

const ShoeItem = (props) => {
  const { name, desc, price, large, medium, small } = props.item;

  return (
    <li className="flex justify-between w-1/2 mx-auto items-center p-4 border mt-2 rounded-xl">
      <div className="flex flex-row space-x-3">
        <span className="font-semibold">{name}</span>
        <span className="text-gray-600 font-medium">{desc}</span>
        <span className="text-red-600 font-bold">₹{price}</span>
      </div>
      <section>
        <button className="border rounded p-2 ml-4 bg-blue-400 font-semibold">
          large{" "}
          <span className="border rounded bg-slate-200 font-semibold p-1">
            {large}
          </span>
        </button>
        <button className="border rounded p-2 ml-4 bg-blue-400 font-semibold ">
          medium{" "}
          <span className="border rounded bg-white font-semibold p-1">
            {medium}
          </span>
        </button>
        <button className="border rounded p-2 ml-4 bg-blue-400 font-semibold ">
          small{" "}
          <span className="border rounded bg-white font-semibold p-1">
            {small}
          </span>
        </button>
      </section>
    </li>
  );
};

export default ShoeItem;
