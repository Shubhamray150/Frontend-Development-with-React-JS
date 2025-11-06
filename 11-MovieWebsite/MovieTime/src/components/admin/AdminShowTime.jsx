import React, { useState } from "react";
import { useSelector } from "react-redux";

const AdminShowTime = () => {
  const movieList = useSelector((state) => state.movies.list);
  const [showtimes, setShowtimes] = useState({});

  const handleChange = (id, value) => {
    setShowtimes((prev) => ({
      ...prev,
      [id]: value,
    }));
    console.log(showtimes);
  };

  const handleSave = async (id) => {
    const newTime = showtimes[id] || "";

    try {
      const res = await fetch(
        `https://movietime-5d6b9-default-rtdb.firebaseio.com/movies/${id}.json`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ showTime: newTime }),
        }
      );

      if (!res.ok) throw new Error("Failed to update showtime");
      alert("Showtime updated successfully!");
    } catch (error) {
      console.error("Error updating showtime:", error);
      alert("Error updating showtime. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 text-black min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Movie Showtimes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movieList.map((movie) => (
          <div
            key={movie.id}
            className="bg-white p-4 shadow rounded-xl flex flex-col gap-3"
          >
            <img
              src={movie.heroImage}
              alt={movie.name}
              className="rounded-xl h-48 object-cover"
            />
            <h2 className="text-lg font-semibold">{movie.name}</h2>
            <p className="text-sm text-gray-600">{movie.genre}</p>

            <label className="text-sm text-gray-700 font-medium">
              Current Showtime:{" "}
              <span className="text-blue-700">
                {movie.showTime || "Not set"}
              </span>
            </label>

            <input
              type="time"
              className="border text-black border-black rounded p-2 text-sm"
              value={showtimes[movie.id] || ""}
              onChange={(e) => handleChange(movie.id, e.target.value)}
            />

            <button
              onClick={() => handleSave(movie.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
            >
              Save Showtime
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminShowTime;
