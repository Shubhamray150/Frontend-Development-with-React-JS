import React from "react";
import ExpenseForm from "../../component/Expenses/ExpenseForm";
import ExpenseList from "../../component/Expenses/ExpenseList";
import NavBar from "./SideBar";
const Body = () => {
  return (
    <>
      <div>
        <ExpenseForm />
        <ExpenseList />
      </div>
    </>
  );
};

export default Body;
