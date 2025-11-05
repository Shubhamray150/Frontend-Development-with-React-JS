import React from "react";
import { Link } from "react-router-dom";

const NowPlayingCard = ({ item }) => {
  return (
    <Link to={`movie/${item.name}`} className="w-54 cursor-pointer">
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
    </Link>
  );
};

export default NowPlayingCard;
