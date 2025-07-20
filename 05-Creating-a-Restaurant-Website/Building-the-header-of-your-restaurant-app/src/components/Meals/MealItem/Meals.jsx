import React from "react";
import classes from "./Meals.module.css";
import MealsForm from "./MealsForm";

const MealItem = ({ meal }) => {
  const { name, detail, price } = meal;
  const priceString = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{detail}</div>
        <div className={classes.price}>{priceString}</div>
      </div>
      <div>
        <MealsForm />
      </div>
    </li>
  );
};

export default MealItem;
