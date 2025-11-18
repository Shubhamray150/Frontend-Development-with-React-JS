import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../store/redux/expenseReducer";

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const [newExpense, setNewExpense] = useState({
    amount: "",
    description: "",
    category: "",
  });

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setNewExpense((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://expensetracker-ec1d7-default-rtdb.firebaseio.com/expense.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newExpense),
        }
      );

      const data = await response.json();

      dispatch(addExpense({ ...newExpense, id: data.name }));
    } catch (error) {
      console.error("Failed to save expense:", error);
    }

    setNewExpense({ amount: "", description: "", category: "" });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full  justify-center items-center gap-6 p-8 rounded-xl shadow-md mx-auto border bg-[var(--card)] border-[var(--border)] dark:shadow-lg"
    >
      <div className="flex flex-col w-full">
        <label
          htmlFor="desc"
          className="text-center font-semibold mb-2 text-[var(--text)]"
        >
          Description
        </label>
        <input
          name="description"
          value={newExpense.description}
          onChange={inputChangeHandler}
          type="text"
          id="desc"
          placeholder="Enter Expense Details here..."
          className="border py-2 px-3 rounded-md bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--text)] placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
        />
      </div>
      <div className="flex w-full items-center gap-4">
        <div className="flex flex-col w-full">
          <label
            htmlFor="amount"
            className="text-center font-semibold mb-2 text-[var(--text)]"
          >
            Amount
          </label>
          <input
            name="amount"
            value={newExpense.amount}
            placeholder="Enter Amount here..."
            onChange={inputChangeHandler}
            type="number"
            id="amount"
            className="border w-[90%] py-2 px-3 rounded bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--text)] placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
          />
        </div>

        <div className="flex w-full flex-col justify-center items-center">
          <label
            htmlFor="category"
            className="text-center font-semibold mb-2 text-[var(--text)]"
          >
            Category
          </label>
          <select
            name="category"
            value={newExpense.category}
            onChange={inputChangeHandler}
            className="border w-full py-2 px-3 rounded-md bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--text)] focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="petrol">Petrol</option>
            <option value="salary">Salary</option>
          </select>
        </div>
      </div>
      <button className="w-1/2 bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 py-2 rounded-md text-white mt-6 font-bold hover:shadow-lg dark:hover:shadow-xl transition hover:from-red-600 hover:to-red-700">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
