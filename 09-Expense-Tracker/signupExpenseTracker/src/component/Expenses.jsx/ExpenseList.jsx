import React from "react";
import ExpenseItem from "./ExpenseItem";

const data = [
  { id: 1, description: "Momos", amount: 20, category: "food" },
  { id: 2, description: "Chawmin", amount: 20, category: "food" },
  { id: 3, description: "Deasil", amount: 40, category: "petrol" },
  { id: 4, description: "Rent", amount: 500, category: "salary" },
];

const ExpenseList = () => {
  return (
    <div className="flex text-center mt-8 w-1/2 mx-auto border rounded-md shadow-md">
      <table className="w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <ExpenseItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
