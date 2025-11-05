import { useEffect, useState } from "react";

const useFetch = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://movietime-5d6b9-default-rtdb.firebaseio.com/movies.json";

      try {
        const res = await fetch(url);
        const data = await res.json();

        const movieList = [];
        for (let key in data) {
          movieList.push({ id: key, ...data[key] });
        }

        setMovies(movieList);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return { movies, error };
};

export default useFetch;
