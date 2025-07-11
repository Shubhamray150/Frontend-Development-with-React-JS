import React, { useState } from "react";
import "./ExpenseForm.css";

const data = {
  enteredTitle: "",
  enteredAmount: "",
  enteredDate: "",
};

const ExpenseForm = (props) => {
  const [userInput, setEnteredData] = useState(data);

  const titleChangeHandler = (event) => {
    setEnteredData((prevData) => {
      return { ...prevData, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setEnteredData((prevData) => {
      return { ...prevData, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setEnteredData((prevData) => {
      return { ...prevData, enteredDate: event.target.value };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      price: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredData({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  const buttonClosehadler = () => {
    props.onFormClose(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2023-01-01"
            max="2025-01-01"
            id="date"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={buttonClosehadler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

// const [enteredTitle, setEnteredTitle] = useState("");
// const [enteredAmount, setEnteredAmount] = useState("");
// const [enteredDate, setEnteredDate] = useState("");

// const titleChangeHandler = (event) => {
//   setEnteredTitle(event.target.value);
// };
// const amountChangeHandler = (event) => {
//   setEnteredTitle(event.target.value);
// };
// const dateChangeHandler = (event) => {
//   setEnteredTitle(event.target.value);
// };

// const inputChangeHandler = (event) => {
//   const { name, value } = event.target;
//   setEnteredData((prevData) => ({
//     ...prevData,
//     [name]: value,
//   }));
// };
// this is more scalable and instead of using 3 saperate inputchangeHandler i can use one for it and use name and value attribute for it
// <input name="enteredTitle" onChange={inputChangeHandler} />
// <input name="enteredAmount" onChange={inputChangeHandler} />
// <input name="enteredDate" onChange={inputChangeHandler} />
