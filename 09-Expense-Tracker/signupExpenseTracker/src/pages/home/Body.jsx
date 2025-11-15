import React from "react";
import ExpenseForm from "../../component/Expenses/ExpenseForm";
import ExpenseList from "../../component/Expenses/ExpenseList";
import NavBar from "./NavBar";
const Body = () => {
  return (
    <>
      <div className="flex">
        <NavBar />
        <div className="border w-full h-screen">
          <ExpenseForm />
          <ExpenseList />
        </div>
      </div>
    </>
  );
};

export default Body;
