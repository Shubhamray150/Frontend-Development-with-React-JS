import React, { useEffect, useState } from "react";
import { setIsLoading } from "../Store/uiSlice";
import { useDispatch } from "react-redux";

const useFetch = (url) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // dispatch(setIsLoading(true));
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        // dispatch(setIsLoading(false));
      }
    };
    fetchData();
    console.log("rendered again ");
  }, [url, dispatch]);
  return { data, error };
};

export default useFetch;
