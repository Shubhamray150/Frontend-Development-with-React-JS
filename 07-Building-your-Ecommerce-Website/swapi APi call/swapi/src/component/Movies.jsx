import React from "react";

const Movies = (props) => {
  console.log(props.data);

  return (
    <>
      {props.data.map((item) => {
        return <div>{item.description}</div>;
      })}
    </>
  );
};

export default Movies;
