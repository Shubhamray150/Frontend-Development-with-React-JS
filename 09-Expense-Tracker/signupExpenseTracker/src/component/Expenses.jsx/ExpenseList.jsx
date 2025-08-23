import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import expenseDataContext from "../../store/expeseDataContext";

const ExpenseList = () => {
  const expenseDataCtx = useContext(expenseDataContext);

  return (
    <div className="flex text-center mt-8 w-1/2 mx-auto border rounded-md shadow-md mb-12">
      <table className="w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Category</th>
          </tr>
        </thead>
        <tbody>
          {expenseDataCtx.expenseItems.map((item) => (
            <ExpenseItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
