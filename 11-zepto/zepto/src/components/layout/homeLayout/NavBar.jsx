import React from "react";

const NavBar = ({ onCategoryChange, category }) => {
  return (
    <section className="flex justify-center mt-2 gap-4 font-semibold pb-[1rem] text-gray-500">
      <div className=" w-full flex justify-center border-b-2 border-gray-400">
        <div className="flex gap-4 w-[80%] items-start">
          <button
            onClick={() => {
              onCategoryChange("all");
            }}
            className={`flex items-center gap-1  pb-2 cursor-pointer ${
              category === "all" && "border-b-3 border-violet-500"
            } `}
          >
            <img
              className="w-[24px] text-gray-400"
              src="https://cdn.zeptonow.com/production/inventory/banner/a767cf6e-9113-409b-b5ab-ac0d22a7db58.png"
              alt="all"
            />
            <span>All</span>
          </button>
          <button
            onClick={() => {
              onCategoryChange("cafe");
            }}
            className={`flex items-center gap-1  pb-2 cursor-pointer ${
              category === "cafe" &&
              "border-b-3 border-violet-500 text-violet-600"
            } `}
          >
            <img
              className="w-[24px]"
              src="https://cdn.zeptonow.com/production/inventory/banner/e8abccfb-64fe-4249-84d3-426eccf01e23.png"
              alt="cafe"
            />
            <span>Cafe</span>
          </button>
          <button
            onClick={() => {
              onCategoryChange("home");
            }}
            className={`flex items-center gap-1  pb-2 cursor-pointer ${
              category === "home" &&
              "border-b-3 border-violet-500  text-violet-600"
            } `}
          >
            <img
              className="w-[24px]"
              src="https://cdn.zeptonow.com/production/inventory/banner/be82f78d-d993-4838-9f4a-4c64cd387126.png"
              alt="home"
            />
            <span>Home</span>
          </button>
          <button
            onClick={() => {
              onCategoryChange("toys");
            }}
            className={`flex items-center gap-1  pb-2 cursor-pointer ${
              category === "toys" &&
              "border-b-3 border-violet-500  text-violet-600"
            } `}
          >
            <img
              className="w-[24px]"
              src="https://cdn.zeptonow.com/production/inventory/banner/b6960301-bb3c-4b75-af0e-433a8ce0a6b9.png"
              alt="Toys"
            />
            <span>Toys</span>
          </button>
          <button
            onClick={() => {
              onCategoryChange("fresh");
            }}
            className={`flex items-center gap-1  pb-2 cursor-pointer ${
              category === "fresh" &&
              "border-b-3 border-violet-500  text-violet-600"
            } `}
          >
            <img
              className="w-[24px]"
              src="https://cdn.zeptonow.com/production/inventory/banner/8e8a58b9-f2d7-46fb-9634-930b016499fa.png"
              alt="fresh"
            />
            <span>Fresh</span>
          </button>
          <button
            onClick={() => {
              onCategoryChange("electronics");
            }}
            className={`flex items-center gap-1  pb-2 cursor-pointer ${
              category === "electronics" &&
              "border-b-3 border-violet-500  text-violet-600"
            } `}
          >
            <img
              className="w-[24px]"
              src="https://cdn.zeptonow.com/production/inventory/banner/5c9a7bea-68b1-4bad-9fab-44cc940b72ee.png"
              alt="Electronics"
            />
            <span>Electronics</span>
          </button>
          <button
            onClick={() => {
              onCategoryChange("mobile");
            }}
            className={`flex items-center gap-1  pb-2 cursor-pointer ${
              category === "mobile" &&
              "border-b-3 border-violet-500  text-violet-600"
            } `}
          >
            <img
              className="w-[24px]"
              src="https://cdn.zeptonow.com/production/inventory/banner/c882779f-738d-46f8-8656-8ebb72246b46.png"
              alt="Mobile"
            />
            <span>Mobile</span>
          </button>
          <button
            onClick={() => {
              onCategoryChange("beauty");
            }}
            className={`flex items-center gap-1  pb-2 cursor-pointer ${
              category === "beauty" && "border-b-3 border-violet-500  text-violet-600"
            } `}
          >
            <img
              className="w-[24px]"
              src="https://cdn.zeptonow.com/production/inventory/banner/fcb1b518-5047-4aee-a6c4-3677c801d2ca.png"
              alt=""
            />
            <span>Beauty</span>
          </button>
          <button
            onClick={() => {
              onCategoryChange("fashion");
            }}
            className={`flex items-center gap-1  pb-2 cursor-pointer ${
              category === "fashion" && "border-b-3 border-violet-500 "
            } `}
          >
            <img
              className="w-[24px]"
              src="https://cdn.zeptonow.com/production/inventory/banner/331fa0bc-afda-409d-a201-acc3deedaa2d.png"
              alt="Fashion"
            />
            <span>Fashion</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
