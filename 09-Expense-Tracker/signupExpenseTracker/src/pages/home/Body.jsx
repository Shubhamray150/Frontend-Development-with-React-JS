import React from "react";
import ExpenseForm from "../../component/Expenses/ExpenseForm";
import ExpenseList from "../../component/Expenses/ExpenseList";
import NavBar from "./SideBar";
const Body = () => {
  return (
    <>
      <div>
        <div className="flex gap-2">
          <ExpenseForm />
          <div className="w-1/2 border border-[var(--border)] shadow-md bg-[var(--card)] rounded-xl"></div>
        </div>
        <ExpenseList />
      </div>
    </>
  );
};

export default Body;
