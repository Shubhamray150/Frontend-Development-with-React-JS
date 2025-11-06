import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AdminBookedMovies = () => {
  const [bookMovie, setBookMovie] = useState([]);
  const movieList = useSelector((state) => state.movies.list);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://movietime-5d6b9-default-rtdb.firebaseio.com/bookedMovies.json"
      );
      const resData = await res.json();

      const arr = [];
      for (let key in resData) {
        arr.push(resData[key]);
      }
      setBookMovie(arr);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 w-full p-6 min-h-screen">
      <h1 className="text-2xl text-black font-bold mb-6">Booked Movies</h1>

      {bookMovie.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookMovie.map((booking, index) => {
            const movie = movieList.find((m) => m.id === booking.movieId);
            return (
              <div
                key={index}
                className="bg-white p-4 shadow rounded-xl flex flex-col gap-2"
              >
                {movie && (
                  <>
                    <img
                      src={movie.heroImage}
                      alt={movie.title}
                      className="rounded-xl h-56 object-cover"
                    />
                    <h2 className="text-xl font-semibold">{movie.title}</h2>
                    <p className="text-gray-600 text-sm">
                      <strong>Director:</strong> {movie.director}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Genre:</strong> {movie.genre}
                    </p>
                  </>
                )}
                <div className="border-t pt-2 text-sm text-gray-700">
                  <p>
                    <strong>Name:</strong> {booking.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {booking.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {booking.phone}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminBookedMovies;
