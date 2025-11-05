import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AdminCategoryCard from "./AdminCategoryCard";

const AdminCategorySection = () => {
  const params = useParams();
  console.log(params);

  const movies = useSelector((state) => state.movies.list);

  const filteredMovies = movies.filter((item) => item.category == params.id);
  console.log(filteredMovies);

  return (
    <div className="bg-gray-100 border text-black w-full p-4 pb-16">
      <span className="text-center mb-4 block font-bold text-2xl">
        Movie Category
      </span>
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredMovies.map((item) => {
          return <AdminCategoryCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default AdminCategorySection;
