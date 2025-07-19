import React from "react";
import classes from "./Meals.module.css";

const Meals = ({ meal }) => {
  console.log(meal);
  const { name, detail, price } = meal;

  return (
    <li className={classes.meal}>
      <h3>{name}</h3>
      <p>{detail}</p>
      <h3 className={classes.price}>${price.toFixed(2)}</h3>
      <hr />
    </li>
  );
};

export default Meals;
