import React from "react";
import classes from "./MealsForm.module.css";
import Input from "../../Ul/Input";

const MealsForm = (props) => {
  return (
    <form className={classes.form}>
      <div>
        {/* <label htmlFor="add">Amount</label> */}
        <Input
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        {/* <input type="text" id="add" /> */}
      </div>
      <button>+Add</button>
    </form>
  );
};

export default MealsForm;
