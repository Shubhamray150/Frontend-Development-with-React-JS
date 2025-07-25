import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
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
const AvailableMeals = () => {
  const mealsList = data.map((meal) => <MealItem key={meal.id} meal={meal} />);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
