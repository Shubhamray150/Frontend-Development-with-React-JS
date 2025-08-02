import React, { useContext, useState } from "react";
import classes from "./MealsForm.module.css";
import Input from "../../Ul/Input";
import CartContext from "../../../store/cart-context";

const MealsForm = (props) => {
  const contextctx = useContext(CartContext);

  const [inputValue, setInputValue] = useState("1");
  const addButtonHandler = () => {
    const data = contextctx.items;
    console.log(data);

    const foundItem = data.find((item) => {
      console.log(props.meal.id);
      return item.id == props.meal.id;
    });

    if (foundItem) {
      contextctx.updateItemHandler({
        ...foundItem,
        meals: foundItem.meals + 1,
      });
    } else {
      const updatedMeal = { ...props.meal, meals: +inputValue };
      contextctx.addItem(updatedMeal);
    }
  };

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form
      className={classes.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
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
            value: inputValue,
            onChange: inputChangeHandler,
          }}
        />
      </div>
      <button onClick={addButtonHandler}>+Add</button>
    </form>
  );
};

export default MealsForm;
