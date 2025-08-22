import React, { useContext, useRef } from "react";
import expenseDataContext from "../../store/expeseDataContext";

const ExpenseForm = () => {
  const expenseCtx = useContext(expenseDataContext);
  const amountRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const expenses = {
      amount: amountRef.current.value.trim(),
      description: descriptionRef.current.value.trim(),
      category: categoryRef.current.value.trim(),
    };

    try {
      const response = await fetch(
        `https://expensetracker-ec1d7-default-rtdb.firebaseio.com/expense.json`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(expenses),
        }
      );
      const data = await response.json();
      expenseCtx.addItem({ ...expenses, id: data.name });
    } catch (error) {
      console.error("Failed to save expense:", error);
    }

    amountRef.current.value = "";
    descriptionRef.current.value = "";
    categoryRef.current.value = "";
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-[50%] justify-center items-center gap-6 p-8 rounded-xl shadow-md mx-auto border"
    >
      <div className="flex flex-col w-full">
        <label
          htmlFor="desc"
          className="text-center font-semibold mb-2 text-slate-700"
        >
          Description
        </label>
        <input
          ref={descriptionRef}
          type="text"
          id="desc"
          placeholder="Enter Expense Details here..."
          className="border py-1 px-2 rounded-md"
        />
      </div>
      <div className="flex w-full items-center gap-4">
        <div className="flex flex-col w-full">
          <label htmlFor="amount" className="text-center font-semibold mb-2">
            Amount
          </label>
          <input
            ref={amountRef}
            placeholder="Enter Amount here..."
            type="number"
            id="amount"
            className="border w-[90%] py-1 px-2 rounded"
          />
        </div>

        <div className="flex w-full flex-col justify-center items-center">
          <label htmlFor="category" className="text-center font-semibold mb-2">
            Category
          </label>
          <select
            ref={categoryRef}
            className="border w-full py-1 px-2 rounded-md focus:outline-none"
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="petrol">Petrol</option>
            <option value="salary">Salary</option>
          </select>
        </div>
      </div>
      <button className="border w-1/2 bg-red-400 py-2 rounded-md text-white mt-6 font-bold hover:bg-red-600">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
