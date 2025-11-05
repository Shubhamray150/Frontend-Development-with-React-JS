import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import InfoRow from "../MovieDetails/InfoRow";

const MovieDetails = () => {
  const { id } = useParams();
  const { movies } = useFetch();

  const movie = movies?.find((item) => item.name === id);

  if (!movie) return null;

  const {
    category,
    director,
    genre,
    heroImage,
    language,
    name,
    moviePoster,
    showTime,
    rating,
    releaseDate,
  } = movie;

  return (
    <div className="text-white bg-black">
      <div className="relative">
        <img
          src={heroImage}
          alt={name}
          className="w-full h-[80vh] object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full px-20 pb-16 flex flex-row items-end gap-10">
          <img
            src={moviePoster}
            alt={name}
            className="w-64  rounded-xl shadow-2xl border border-gray-700"
          />
          <div>
            <h1 className="text-5xl  font-bold mb-4">{name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-300 text-base">
              <span className="bg-gray-800 px-3 py-1 rounded-lg">
                {language}
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-lg">{genre}</span>
              <span className="bg-gray-800 px-3 py-1 rounded-lg">
                {category}
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-lg">
                ⭐ {rating}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-6xl mx-auto px-12 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-5">
            <InfoRow label="Director" value={director} />
            <InfoRow label="Movie Time" value={showTime} />
            <InfoRow label="Release Date" value={releaseDate} />
            <InfoRow label="Language" value={language} />
            <InfoRow label="IMDB Rating" value={rating} />
          </div>

          <div className="flex items-center justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 cursor-pointer  text-black font-semibold px-10 py-3 rounded-xl shadow-lg">
              🎟️ Book Ticket
            </button>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-amber-500 mb-4">
            Synopsis
          </h2>
          <p className="text-gray-300 text-justify">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit...
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
