import React, { useState } from "react";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "1",
      date: new Date(2024, 7, 5),
      title: "Insurance",
      price: 100,
    },
    {
      id: "2",
      date: new Date(2023, 3, 25),
      title: "Book",
      price: 10,
    },
    {
      id: "3",
      date: new Date(2023, 10, 11),
      title: "Pen",
      price: 1,
    },
    {
      id: "4",
      date: new Date(2025, 1, 14),
      title: "Laptop",
      price: 200,
    },
  ];

  const [expense, setExpense] = useState(expenses);

  const saveDataHandler = (data) => {
    setExpense((prevData) => {
      const newData = [...prevData, data];
      console.log(newData);
      return newData;
    });
  };

  return (
    <div>
      <h1>Let's get started</h1>
      <NewExpense onSaveData={saveDataHandler} />
      <Expenses expenses={expense} />
    </div>
  );
};

export default App;
