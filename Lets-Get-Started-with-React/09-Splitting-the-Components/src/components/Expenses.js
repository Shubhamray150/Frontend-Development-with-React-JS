// Write your code here
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  return (
    <div className = "expenses">
      {props.expenses.map((expense) => {
        return <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
    })}
    </div>
  )
}
export default Expenses;