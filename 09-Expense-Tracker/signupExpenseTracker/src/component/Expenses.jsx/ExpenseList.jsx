import { useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { useSelector, useDispatch } from "react-redux";
import { setExpenses } from "../../store/redux/expenseReducer";

const ExpenseList = () => {
  const Dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://expensetracker-ec1d7-default-rtdb.firebaseio.com/expense.json"
        );
        const data = await response.json();
        const arrayData = [];
        for (let key in data) {
          arrayData.push({
            id: key,
            description: data[key].description,
            amount: data[key].amount,
            category: data[key].category,
          });
        }
        if (response.ok) {
          Dispatch(setExpenses(arrayData));
        }
      } catch (error) {
        console.error("Failed to fetch expenses:", error);
      }
    };
    fetchData();
  }, []);

  const expenseItems = useSelector((state) => state.expense.expenseItems);

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
          {expenseItems.map((item) => (
            <ExpenseItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
