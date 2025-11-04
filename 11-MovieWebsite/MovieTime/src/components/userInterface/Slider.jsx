import React, { useEffect, useState } from "react";
import { FaPlayCircle, FaExclamationCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../store/movieSlice";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Slider = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.list);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const url =
      "https://movietime-5d6b9-default-rtdb.firebaseio.com/movies.json";

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        const movieList = [];
        for (let key in data) {
          movieList.push({ id: key, ...data[key] });
        }

        dispatch(setMovies(movieList));
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const heroMovies = movies.filter((item) => item.category === "Hero Section");

  console.log(heroMovies);

  const nextSlide = () => {
    setIndex((prev) => {
      if (prev + 1 === heroMovies.length) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return heroMovies.length - 1;
      }
      return prev - 1;
    });
  };

  if (!heroMovies.length) return <div>Loading...</div>;

  const current = heroMovies[index];

  return (
    <div
      className="object-cover w-full h-[550px] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${current.heroImage})` }}
    >
      <div className="bg-black/50 absolute w-full h-full"></div>

      <div className="relative left-40 top-16 text-white max-w-2xl h-full flex flex-col justify-center gap-4 px-6">
        <span className="text-4xl font-bold">{current.name}</span>

        <span className="text-lg">
          From{" "}
          <span className="text-yellow-400 font-semibold">
            {current.releaseDate}
          </span>
        </span>

        <span className="text-sm opacity-80">
          {current.genre} | Directed by {current.director}
        </span>

        <div className="flex items-center gap-6 mt-2">
          <a
            href={current.trailerLink}
            className="flex items-center gap-2 hover:text-yellow-400 transition"
            target="_blank"
          >
            <FaPlayCircle className="text-3xl" />
            <span className="text-xl font-medium">Trailer</span>
          </a>

          <button className="flex items-center gap-2 hover:text-yellow-400 transition">
            <FaExclamationCircle className="text-3xl text-yellow-400" />
            <span className="text-xl font-medium">Detail</span>
          </button>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute  top-1/2 cursor-pointer -translate-y-1/2 text-4xl text-white h-full px-8 hover:text-yellow-400"
      >
        <IoIosArrowBack />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 text-4xl text-white h-full px-8  hover:text-yellow-400"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Slider;
