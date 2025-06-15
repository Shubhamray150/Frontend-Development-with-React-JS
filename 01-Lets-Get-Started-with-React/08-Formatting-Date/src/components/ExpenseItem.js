// Write your code here
import "./ExpenseItem.css"
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemebr", "December"];
function ExpenseItem(props) {
  const dates = props.date.getDate().toString().padStart(2,'0');
  const month = months[props.date.getMonth()];
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{dates}</div>
      </div>
      <div className="expense-item__description" >
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;