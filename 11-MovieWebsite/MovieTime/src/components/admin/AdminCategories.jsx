import React from "react";
import { Link } from "react-router-dom";
import { movieCategories } from "../utils/data";

const AdminCategories = () => {
  return (
    <div className="flex flex-wrap bg-gray-100 text-black gap-6 w-full p-4 justify-center ">
      {movieCategories.map((item, idx) => (
        <Link
          to={`/admin/category/${item.id}`}
          key={idx}
          className="w-60 cursor-pointer bg-white rounded-xl shadow-md p-4 text-center"
        >
          <img
            src={item.image}
            className="mx-auto w-40 h-48 object-cover rounded-md"
            alt={item.section}
          />
          <p className="font-semibold text-lg mt-8">{item.section}</p>
        </Link>
      ))}
    </div>
  );
};

export default AdminCategories;
