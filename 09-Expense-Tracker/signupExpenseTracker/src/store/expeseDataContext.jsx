import React, { useEffect, useState } from "react";

const expenseDataContext = React.createContext({
  expenseItems: [],
  addItem: (data) => {},
  removeItem: (data) => {},
});

export const ExpenseDataContextProvider = ({ children }) => {
  const [expensedata, setExpenseData] = useState([]);

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
        setExpenseData(arrayData);
      } catch (error) {
        console.error("Failed to fetch expenses:", error);
      }
    };
    fetchData();
  }, []);

  const addExpenseItemHandler = (data) => {
    return setExpenseData((prevData) => [...prevData, data]);
  };

  const expenseCtx = {
    expenseItems: expensedata,
    addItem: addExpenseItemHandler,
    removeItem: (data) => {},
  };

  return (
    <expenseDataContext.Provider value={expenseCtx}>
      {children}
    </expenseDataContext.Provider>
  );
};

export default expenseDataContext;
