import React from "react";
import { MdMovieFilter } from "react-icons/md";

//  name director, genre
//  hero section image,
//  movie poster,
// , and trailer link.
//   release date
// , language,\ IMDB rating
// , showtime category
// , description,

const AdminMovies = () => {
  return (
    <div className="w-full bg-gray-50">
      <h1 className="text-center font-bold text-2xl my-4 shadow-md py-4 flex justify-center items-center gap-8">
        <MdMovieFilter size={30} color="red" />
        <span className="italic">Add Movies</span>
      </h1>
      <form className="w-full">
        <div className="flex px-4 py-2 w-full justify-around ">
          <div className=" flex gap-2 items-center w-1/3">
            <label className="font-semibold text-lg" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="border rounded-md border-gray-400 px-2 py-1 w-60"
            />
          </div>

          <div className=" flex gap-2 items-center w-1/3">
            <label className="font-semibold text-lg" htmlFor="director">
              Director Name
            </label>
            <input
              type="text"
              className="border rounded-md border-gray-400 px-2 py-1 w-60"
            />
          </div>
          <div className="flex gap-2 items-center w-1/3">
            <label className="font-semibold text-lg" htmlFor="genre">
              Genre
            </label>
            <input
              type="text"
              className="border rounded-md border-gray-400 px-2 py-1 w-60"
            />
          </div>
        </div>
        <div>
          <label htmlFor="hero">Hero Section Image</label>
          <input
            type="text"
            className="border rounded-md border-gray-400 px-2 py-1 w-60"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminMovies;
