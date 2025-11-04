import React from "react";

const NowPlayingCard = ({ item }) => {
  return (
    <div className="w-54 cursor-pointer">
      <div className="overflow-hidden w-full h-100">
        <img
          className="object-cover h-full"
          src={item.moviePoster}
          alt={item.name}
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-lg my-1">{item.name}</span>
        <span className="text-gray-500 text-xs mb-2">
          Release: {item.releaseDate}
        </span>
      </div>
    </div>
  );
};

export default NowPlayingCard;
