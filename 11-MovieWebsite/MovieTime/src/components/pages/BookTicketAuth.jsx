import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const BookTicketAuth = () => {
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movies.list);
  const { id } = useParams();
  const selectedMovie = movies.find((movie) => movie.id === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingDetails = { ...formData, movieId: id };

    try {
      const res = await fetch(
        "https://movietime-5d6b9-default-rtdb.firebaseio.com/bookedMovies.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingDetails),
        }
      );

      if (!res.ok) throw new Error("Failed to book ticket");

      const resData = await res.json();
      console.log("Booking confirmed:", resData);
      alert("🎟️ Ticket booked successfully!");
      navigate("/");
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong while booking the ticket.");
    }
  };

  return (
    <div>
      <h1 className="text-center font-semibold text-2xl my-4">Book Ticket</h1>

      {selectedMovie && (
        <h2 className="text-center text-lg mb-4 font-medium">
          Movie: {selectedMovie.title}
        </h2>
      )}

      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-2xl shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-medium mb-1">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTicketAuth;
