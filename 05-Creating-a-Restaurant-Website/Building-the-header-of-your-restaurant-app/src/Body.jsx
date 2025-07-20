import React from "react";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
const Body = () => {
  return (
    <div className="body">
      <div>
        <MealsSummary />
        <AvailableMeals />
      </div>
    </div>
  );
};

export default Body;
