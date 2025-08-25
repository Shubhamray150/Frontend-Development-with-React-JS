import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { removeExpense, updateExpense } from "../../store/redux/expenseReducer";

const ExpenseItem = ({ item }) => {
  const Dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const descRef = useRef();
  const amountRef = useRef();
  const categoryRef = useRef();

  const { id, description, amount, category } = item;

  const deleteBtnHandler = () => {
    Dispatch(removeExpense(id));
  };

  const editBtnHandler = () => {
    setIsEditing(true);
  };

  const saveBtnHandler = () => {
    const updatedItem = {
      id: id,
      description: descRef.current.value,
      amount: amountRef.current.value,
      category: categoryRef.current.value,
    };
    Dispatch(updateExpense(updatedItem));
    setIsEditing(false);
  };

  return (
    <tr className="border-b">
      <td className="px-4 py-2">
        {isEditing ? (
          <input
            defaultValue={description}
            type="text"
            ref={descRef}
            className="w-[90%] border rounded-md p-1 border-gray-400"
          />
        ) : (
          description
        )}
      </td>

      <td className="px-4 py-2">
        {isEditing ? (
          <input
            type="number"
            defaultValue={amount}
            ref={amountRef}
            className="w-[90%] border rounded-md p-1 border-gray-400"
          />
        ) : (
          amount
        )}
      </td>

      <td className="px-4 py-2">
        {isEditing ? (
          <select
            ref={categoryRef}
            defaultValue={category}
            className="border w-4/5 py-1 px-2 rounded-md p-1 border-gray-400 focus:outline-none"
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

      <td className="px-4 py-2 ">
        {!isEditing ? (
          <button
            onClick={editBtnHandler}
            className="bg-blue-500 rounded-md mr-5 px-5 py-1 text-white font-semibold hover:bg-blue-700 hover:font-bold"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={saveBtnHandler}
            className="bg-green-500 rounded-md mr-5 px-5 py-1 text-white font-semibold hover:bg-green-700 hover:font-bold"
          >
            save
          </button>
        )}
        {!isEditing && (
          <button
            onClick={deleteBtnHandler}
            className="bg-red-500 rounded-md px-3 py-1 text-white font-semibold hover:bg-red-700 hover:font-bold"
          >
            Delete
          </button>
        )}
      </td>
    </tr>
  );
};

export default ExpenseItem;
