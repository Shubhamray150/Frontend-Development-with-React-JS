import React from "react";

const AdminCategoryCard = ({ item }) => {
  console.log(item);

  return (
    <div className="border rounded-2xl overflow-hidden">
      <div>
        <img src={item.moviePoster} className="w-60 h-90 object-cover" alt="" />
      </div>
      <span className="text-lg font-semibold text-center block p-2 truncate w-60">
        {item.name}
      </span>
    </div>
  );
};

export default AdminCategoryCard;
