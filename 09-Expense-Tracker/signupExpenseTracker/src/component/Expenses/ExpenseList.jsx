import { useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { useSelector, useDispatch } from "react-redux";
import { setExpenses } from "../../store/redux/expenseReducer";

const ExpenseList = () => {
  const expenseItems = useSelector((state) => state.expense.expenseItems);
  const Dispatch = useDispatch();
  console.log(expenseItems);

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
        console.log(arrayData);

        if (response.ok) {
          Dispatch(setExpenses(arrayData));
        }
      } catch (error) {
        console.error("Failed to fetch expenses:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex text-center mt-8 w-full mx-auto border rounded-md shadow-md mb-12 bg-[var(--card)] border-[var(--border)] dark:shadow-lg overflow-hidden">
      <table className="w-full table-auto">
        <thead className="bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900 dark:to-purple-800 border-b border-[var(--border)]">
          <tr>
            <th className="px-4 py-3 text-[var(--text)] font-semibold">
              Description
            </th>
            <th className="px-4 py-3 text-[var(--text)] font-semibold">
              Amount
            </th>
            <th className="px-4 py-3 text-[var(--text)] font-semibold">
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          {expenseItems.map((item) => (
            <ExpenseItem key={item.id} item={item} />
          ))}
        </tbody>
        <tfoot className="font-bold bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 border-t-2 border-[var(--border)]">
          <tr>
            <td className="px-4 py-3 text-right text-[var(--text)]" colSpan={3}>
              Total:
            </td>
            <td className="px-4 py-3 text-[var(--text)]">
              ₹
              {expenseItems.reduce((sum, item) => sum + Number(item.amount), 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
