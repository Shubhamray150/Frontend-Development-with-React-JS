import React from "react";
import NowPlayingCard from "./NowPlayingCard";
import { useDispatch, useSelector } from "react-redux";

const NowPlaying = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.list);
  console.log(movies);

  const nowPlayingMovies = movies.filter(
    (item) => item.category === "Now Playing"
  );

  return (
    <div className="w-full ">
      <div className="text-4xl font-bold text-center my-8">Now Playing</div>
      <div className="flex gap-6 justify-center  my-12 ">
        {nowPlayingMovies.map((item) => {
          return <NowPlayingCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default NowPlaying;
