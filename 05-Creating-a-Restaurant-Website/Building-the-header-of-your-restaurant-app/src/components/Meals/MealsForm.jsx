import React from "react";
import classes from "./MealsForm.module.css";

const MealsForm = () => {
  return (
    <form className={classes.form}>
      <div>
        <label htmlFor="add">Amount</label>
        <input type="text" id="add" />
      </div>
      <button>+Add</button>
    </form>
  );
};

export default MealsForm;
