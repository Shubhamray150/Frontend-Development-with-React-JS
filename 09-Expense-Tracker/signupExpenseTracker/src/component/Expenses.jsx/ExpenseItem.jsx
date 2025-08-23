import React, { useContext } from "react";
import expenseDataContext from "../../store/expeseDataContext";

const ExpenseItem = ({ item }) => {
  const expenseCtx = useContext(expenseDataContext);
  const { id, description, amount, category } = item;

  const deleteBtnHandler = () => {
    expenseCtx.removeItem(id);
  };

  return (
    <tr className="border-b">
      <td className="px-4 py-2">{description}</td>
      <td className="px-4 py-2">{amount}</td>
      <td className="px-4 py-2">{category}</td>
      <td className="px-4 py-2 ">
        <button className="bg-blue-500 rounded-md mr-5 px-5 py-1 text-white font-semibold hover:bg-blue-700 hover:font-bold">
          Edit
        </button>
        <button
          onClick={deleteBtnHandler}
          className="bg-red-500 rounded-md px-3 py-1 text-white font-semibold hover:bg-red-700 hover:font-bold"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
