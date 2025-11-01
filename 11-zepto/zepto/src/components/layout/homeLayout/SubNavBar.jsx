import React from "react";

const SubNavBar = ({ data, onCategoryChange, category }) => {
  return (
    <div className="flex items-center mt-2 gap-4 font-semibold  text-gray-500 justify-start  bg-gradient-to-t from-purple-200 to-white pb-0">
      {data.map(({ id, name, img }) => {
        return (
          <div className={` ${category && "border-b-2"} h-full`}>
            <div className="px-[1rem] pb-[12px] pt-[1rem] max-w-[5.5rem] max-h-[7.5rem] flex items-center ">
              <button
                key={id}
                onClick={() => {
                  onCategoryChange(id);
                }}
                className={`flex flex-col items-center gap-1 pb-2 cursor-pointer ${
                  category === id &&
                  "border-b-3 border-violet-500 text-violet-600"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${
                    category == id ? "bg-violet-300" : "bg-white"
                  }`}
                >
                  <img className="w-full h-full " src={img} alt={name} />
                </div>
                <span
                  className={`text-xs font-semibold ${
                    !category === id && "text-violet-500"
                  }`}
                >
                  {name}
                </span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubNavBar;
