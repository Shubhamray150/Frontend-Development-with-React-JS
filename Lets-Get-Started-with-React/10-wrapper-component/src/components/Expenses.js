// Write your code here
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
export default function Expenses(props) {
  return (
    <Card className = "expenses">
      {props.expenses.map((expense) => {
        return <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
    })}
    </Card>
  )
}