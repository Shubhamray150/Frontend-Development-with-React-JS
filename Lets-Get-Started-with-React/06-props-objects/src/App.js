// Write your code at relevant places in the code below:

import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h1>Let's get Started</h1>
      <ExpenseItem
        date={new Date(2023, 7, 15)}
        title="Insurance"
        location = "Bangalore"
        price="50"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2023, 3, 25)}
        title="Book"
        location = "Delhi"
        price="20"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2023, 10, 11)}
        title="Pen"
        location = "Hyderabad"
        price="5"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2023, 1, 14)}
        title="Laptop"
        location = "Mumbai"
        price="200"
      ></ExpenseItem>
    </div>
  );
}

export default App;
