import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PremiumBtn = () => {
  const [activatePremium, setActivatePremium] = useState(false);
  const expenseItems = useSelector((state) => state.expense.expenseItems);

  useEffect(() => {
    const totalExpenses = expenseItems.reduce(
      (sum, item) => sum + Number(item.amount),
      0
    );
    if (totalExpenses > 500) {
      setActivatePremium(true);
    } else {
      setActivatePremium(false);
    }
  }, [expenseItems]);

  const premuimBtnHandler = () => {
    setActivatePremium(false);
  };

  return (
    <>
      {activatePremium && (
        <button
          onClick={premuimBtnHandler}
          className="px-4 py-1.5 rounded-lg text-sm font-medium 
                     bg-yellow-400 text-black hover:bg-yellow-500 transition"
        >
          Activate Premium
        </button>
      )}
    </>
  );
};

export default PremiumBtn;
