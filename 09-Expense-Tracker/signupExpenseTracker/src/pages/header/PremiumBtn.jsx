import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPremium } from "../../store/redux/themeSlice";

const PremiumBtn = () => {
  const dispatch = useDispatch();
  const expenseItems = useSelector((state) => state.expense.expenseItems);
  const premium = useSelector((state) => state.theme.premium);

  const totalExpenses = expenseItems.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  useEffect(() => {
    if (expenseItems.length === 0) return;

    if (totalExpenses <= 10000 && premium) {
      dispatch(setPremium(false));
    }
  }, [totalExpenses]);

  const premuimBtnHandler = () => {
    dispatch(setPremium(true));
  };

  return (
    <>
      {totalExpenses > 10000 && !premium && (
        <button
          onClick={premuimBtnHandler}
          className="px-4 py-1 rounded-lg text-sm font-medium cursor-pointer
                     bg-yellow-400 text-black hover:bg-yellow-500 transition"
        >
          Activate Premium
        </button>
      )}
    </>
  );
};

export default PremiumBtn;
