import React from "react";
import classes from "./MealsList.module.css";
import Meals from "./Meals";
import Card from "../Ul/Card";

const data = [
  {
    id: "m1",
    name: "Sushi",
    detail: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    detail: "A german speciality",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    detail: "American , raw , meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    detail: "Healthy...and....green",
    price: 8.55,
  },
];
const MealsList = () => {
  return (
    <section>
      <ul className={classes.mealList}>
        {data.map((meals) => {
          return <Meals key={meals.id} meal={meals} />;
        })}
      </ul>
    </section>
  );
};

export default MealsList;
