import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { removeExpense, updateExpense } from "../../store/redux/expenseReducer";

const ExpenseItem = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const descRef = useRef();
  const amountRef = useRef();
  const categoryRef = useRef();

  const { id, description, amount, category } = item;

  const deleteBtnHandler = async () => {
    try {
      const response = await fetch(
        `https://expensetracker-ec1d7-default-rtdb.firebaseio.com/expense/${id}.json`,
        { method: "DELETE" }
      );
      dispatch(removeExpense(id));
    } catch (error) {}
  };

  const editBtnHandler = () => {
    setIsEditing(true);
  };

  const saveBtnHandler = async () => {
    const updatedData = {
      id: id,
      description: descRef.current.value,
      amount: amountRef.current.value,
      category: categoryRef.current.value,
    };
    const response = await fetch(
      `https://expensetracker-ec1d7-default-rtdb.firebaseio.com/expense/${updatedData.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          description: updatedData.description,
          amount: updatedData.amount,
          category: updatedData.category,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(updateExpense(updatedData));
    setIsEditing(false);
  };

  return (
    <tr className="border-b border-[var(--border)] hover:bg-[var(--card-hover)] transition text-[var(--text)]">
      <td className="px-4 py-3 capitalize">
        {isEditing ? (
          <input
            defaultValue={description}
            type="text"
            ref={descRef}
            className="w-[90%] border rounded-md p-2 bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--text)] focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        ) : (
          description
        )}
      </td>

      <td className="px-4 py-3">
        {isEditing ? (
          <input
            type="number"
            defaultValue={amount}
            ref={amountRef}
            className="w-[90%] border rounded-md p-2 bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--text)] focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        ) : (
          amount
        )}
      </td>

      <td className="px-4 py-3 capitalize">
        {isEditing ? (
          <select
            ref={categoryRef}
            defaultValue={category}
            className="border w-4/5 py-2 px-2 rounded-md bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--text)] focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="petrol">Petrol</option>
            <option value="salary">Salary</option>
          </select>
        ) : (
          category
        )}
      </td>

      <td className="px-4 py-3 space-x-2">
        {!isEditing ? (
          <>
            <button
              onClick={editBtnHandler}
              className="bg-blue-500 dark:bg-blue-600 rounded-md px-4 py-1 text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-700 transition shadow-sm hover:shadow-md"
            >
              Edit
            </button>
            <button
              onClick={deleteBtnHandler}
              className="bg-red-500 dark:bg-red-600 rounded-md px-3 py-1 text-white font-semibold hover:bg-red-700 dark:hover:bg-red-700 transition shadow-sm hover:shadow-md"
            >
              Delete
            </button>
          </>
        ) : (
          <button
            onClick={saveBtnHandler}
            className="bg-green-500 dark:bg-green-600 rounded-md px-4 py-1 text-white font-semibold hover:bg-green-700 dark:hover:bg-green-700 transition shadow-sm hover:shadow-md"
          >
            Save
          </button>
        )}
      </td>
    </tr>
  );
};

export default ExpenseItem;
