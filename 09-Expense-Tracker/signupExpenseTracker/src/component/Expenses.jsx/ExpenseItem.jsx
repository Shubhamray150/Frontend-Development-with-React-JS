import React from "react";

const ExpenseItem = ({ item }) => {
  const { description, amount, category } = item;

  return (
    <tr className="border-b">
      <td className="px-4 py-2">{description}</td>
      <td className="px-4 py-2">{amount}</td>
      <td className="px-4 py-2">{category}</td>
    </tr>
  );
};

export default ExpenseItem;
