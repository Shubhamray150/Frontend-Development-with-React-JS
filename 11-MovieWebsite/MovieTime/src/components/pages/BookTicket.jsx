import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BookTicket = () => {
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movies.list);
  console.log(movies);

  return (
    <div>
      <h1 className="text-center my-4 font-bold text-2xl">Book Ticket</h1>
      <div className="mt-4 p-4">
        {movies.map((item) => {
          console.log(item);
          return (
            <div className="px-2 py-1 flex items-center gap-2 border border-gray-700 my-2 rounded-md">
              <div className="flex items-center gap-8 flex-2">
                <div>
                  <img src={item.moviePoster} className="w-10" alt="" />
                </div>
                <span className="text-lg font-semibold">{item.name}</span>
              </div>
              <span className="text-lg font-semibold">{item.showTime}</span>
              <span>
                <button
                  onClick={() => {
                    navigate(`/bookTicketAuth/${item.id}`);
                  }}
                  className="bg-amber-800 mx-4 cursor-pointer rounded-xl px-2 py-1"
                >
                  Select
                </button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookTicket;
