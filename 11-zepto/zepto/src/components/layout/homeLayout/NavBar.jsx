import React from "react";
import { categories } from "../../../data/appData";

const NavBar = ({ onCategoryChange, category }) => {
  return (
    <section className="bg-white flex justify-center mt-2 gap-4 font-semibold pb-[1rem] text-gray-500">
      <div className="w-full flex justify-center border-b-2 border-gray-400">
        <div className="flex gap-4 w-[80%] items-center overflow-x-auto">
          {categories.map(({ id, name, img }) => {
            return (
              <button
                key={id}
                onClick={() => {
                  onCategoryChange(id);
                }}
                className={`flex items-center gap-1 pb-2 cursor-pointer ${
                  category === id
                    ? "border-b-3 border-violet-500 text-violet-600"
                    : ""
                }`}
              >
                <img className="w-[24px]" src={img} alt={name} />
                <span>{name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NavBar;
