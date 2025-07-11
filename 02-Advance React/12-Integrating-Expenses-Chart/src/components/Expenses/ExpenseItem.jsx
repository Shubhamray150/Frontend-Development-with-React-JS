import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = ({ expenseValue }) => {
  const { date, price, location } = expenseValue;

  const [title, setTitle] = useState(expenseValue.title);

  function buttonClickHandler() {
    setTitle("NewTitle");
  }
  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={date} />

        <div className="expense-item__location">{location}</div>

        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${price}</div>
          <button onClick={buttonClickHandler}>click here</button>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
