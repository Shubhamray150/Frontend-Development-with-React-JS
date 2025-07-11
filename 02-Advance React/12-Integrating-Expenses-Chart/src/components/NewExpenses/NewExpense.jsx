import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (expenseData) => {
    const enteredExpenseData = { ...expenseData, id: Math.random() };
    props.onSaveData(enteredExpenseData);
    setIsEditing(false);
  };

  const buttonClickHandler = () => {
    setIsEditing(true);
  };

  const isEditingHandler = (data) => {
    setIsEditing(data);
    console.log(data);
  };

  return (
    <div className="new-expense">
      {isEditing === false && (
        <button type="button" onClick={buttonClickHandler}>
          Add Expense
        </button>
      )}
      {isEditing === true && (
        <ExpenseForm
          onFormClose={isEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
