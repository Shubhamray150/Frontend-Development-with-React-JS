import React from "react";
import MealsList from "./components/Meals/MealsList";
import MealsSummary from "./components/Meals/MealsSummary";
const Body = () => {
  return (
    <div className="body">
      <div>
        <MealsSummary />
        <MealsList />
      </div>
    </div>
  );
};

export default Body;
