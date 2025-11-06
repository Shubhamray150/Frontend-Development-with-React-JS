import React from "react";
import { useSelector } from "react-redux";
import NowPlayingCard from "./NowPlayingCard";

const TopMovies = () => {
  const movies = useSelector((state) => state.movies.list);

  const topMovies = movies.filter(
    (item) => item.category === "Top Movies in Theaters"
  );

  return (
    <div className="py-16 ">
      <div className="text-4xl font-bold text-center my-8">Top Movies</div>
      <div className="flex gap-6 justify-center my-12">
        {topMovies.map((item) => {
          return <NowPlayingCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default TopMovies;
