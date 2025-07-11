import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const changeFilterHandler = (seletedYear) => {
    setFilteredYear(seletedYear);
  };

  const filteredExpenses = props.expenses.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />

      <ExpensesChart chartData={filteredExpenses} />

      <>
        {filteredExpenses.length === 0 && (
          <p className="noExpense">No expense found</p>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} expenseValue={expense} />
          ))}
        {filteredExpenses.length === 1 && (
          <p className="noExpense">Only one expense. Please add more.</p>
        )}
      </>
    </div>
  );
};

export default Expenses;
