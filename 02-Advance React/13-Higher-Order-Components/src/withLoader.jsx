// withLoader.js
import React, { useState, useEffect } from "react";

const withLoader = (WrappedComponent, data) => {
  //Write your code here and create your HOC
  //Just like in the video

  return function withLoaderComponent(props) {
    const [isLoading, setIsLoading] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
      setTimeout(() => {
        setItems(data);
        setIsLoading(false);
      }, 2000);
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent items={items} />;
  };
};

export default withLoader;
