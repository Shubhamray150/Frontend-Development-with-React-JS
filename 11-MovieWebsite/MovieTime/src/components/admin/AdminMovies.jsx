import React, { useState } from "react";
import { MdMovieFilter } from "react-icons/md";
import { movieCategories } from "../utils/data";

const AdminMovies = () => {
  const [formData, setFormData] = useState({
    name: "",
    director: "",
    genre: "",
    heroImage: "",
    moviePoster: "",
    trailerLink: "",
    releaseDate: "",
    language: "",
    rating: "",
    showTime: "",
    category: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function submitHandler(e) {
    e.preventDefault();

    console.log("Form Submitted:", formData);
    try {
      const res = fetch(
        "https://movietime-5d6b9-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (res.ok) {
        alert("Movie submitted!");
      }
    } catch (error) {}

    setFormData({
      name: "",
      director: "",
      genre: "",
      heroImage: "",
      moviePoster: "",
      trailerLink: "",
      releaseDate: "",
      language: "",
      rating: "",
      showTime: "",
      category: "",
    });
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-10">
      <h1 className="text-center font-bold text-2xl my-4 shadow-md py-4 flex justify-center items-center gap-3">
        <MdMovieFilter size={30} className="text-red-500" />
        <span className="italic">Add Movies</span>
      </h1>

      <form
        onSubmit={submitHandler}
        className="w-10/12 mx-auto p-6 bg-white rounded-xl shadow space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold text-lg">
              Name
            </label>
            <input
              onChange={inputChangeHandler}
              id="name"
              name="name"
              value={formData.name}
              type="text"
              className="border rounded-md border-gray-400 px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="director" className="font-semibold text-lg">
              Director
            </label>
            <input
              onChange={inputChangeHandler}
              name="director"
              id="director"
              value={formData.director}
              type="text"
              className="border rounded-md border-gray-400 px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="genre" className="font-semibold text-lg">
              Genre
            </label>
            <input
              onChange={inputChangeHandler}
              id="genre"
              name="genre"
              value={formData.genre}
              type="text"
              className="border rounded-md border-gray-400 px-2 py-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="heroImage">Hero Section Image</label>
            <input
              onChange={inputChangeHandler}
              id="heroImage"
              name="heroImage"
              value={formData.heroImage}
              type="text"
              className="border rounded-md border-gray-400 px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="moviePoster">Movie Poster</label>
            <input
              onChange={inputChangeHandler}
              id="moviePoster"
              name="moviePoster"
              value={formData.moviePoster}
              type="text"
              className="border rounded-md border-gray-400 px-2 py-1"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="trailerLink">Trailer Link</label>
          <input
            onChange={inputChangeHandler}
            id="trailerLink"
            name="trailerLink"
            value={formData.trailerLink}
            type="text"
            className="border rounded-md border-gray-400 px-2 py-1"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <label htmlFor="releaseDate">Release Date</label>
            <input
              onChange={inputChangeHandler}
              id="releaseDate"
              name="releaseDate"
              value={formData.releaseDate}
              type="date"
              className="border rounded-md border-gray-400 px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="language">Language</label>
            <input
              onChange={inputChangeHandler}
              id="language"
              name="language"
              value={formData.language}
              type="text"
              className="border rounded-md border-gray-400 px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="rating">IMDB Rating</label>
            <input
              onChange={inputChangeHandler}
              id="rating"
              name="rating"
              value={formData.rating}
              type="number"
              className="border rounded-md border-gray-400 px-2 py-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="showTime">Show Time</label>
            <input
              onChange={inputChangeHandler}
              id="showTime"
              name="showTime"
              value={formData.showTime}
              type="time"
              className="border rounded-md border-gray-400 px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="category">Category</label>
            <select
              onChange={inputChangeHandler}
              id="category"
              name="category"
              value={formData.category}
              className="border rounded-md border-gray-400 px-2 py-1 capitalize"
            >
              <option value="">Select Category</option>
              {movieCategories.map((item, index) => (
                <option key={index} value={item.section} className="capitalize">
                  {item.section}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex">
          <button
            type="submit"
            className="border rounded-md mx-auto bg-blue-500 text-white px-4 py-2 hover:bg-blue-700"
          >
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminMovies;
