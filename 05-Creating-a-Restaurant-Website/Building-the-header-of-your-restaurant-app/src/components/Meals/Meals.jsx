import React from "react";
import classes from "./Meals.module.css";
import MealsForm from "./MealsForm";

const Meals = ({ meal }) => {
  const { name, detail, price } = meal;
  const priceString = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p>{detail}</p>
        <h3 className={classes.price}>{priceString}</h3>
      </div>
      <div>
        <MealsForm />
      </div>
    </li>
  );
};

export default Meals;
