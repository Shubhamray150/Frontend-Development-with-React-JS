import React, { useEffect, useState } from "react";

const expenseDataContext = React.createContext({
  expenseItems: [],
  addItem: (data) => {},
  removeItem: (data) => {},
  updateItem: (data) => {},
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
        if (response.ok) {
          setExpenseData(arrayData);
        }
      } catch (error) {
        console.error("Failed to fetch expenses:", error);
      }
    };
    fetchData();
  }, []);

  const addExpenseItemHandler = (data) => {
    return setExpenseData((prevData) => [...prevData, data]);
  };

  const removeExpenseItemHandler = async (id) => {
    try {
      const response = await fetch(
        `https://expensetracker-ec1d7-default-rtdb.firebaseio.com/expense/${id}.json`,
        { method: "DELETE" }
      );

      if (response.ok) {
        setExpenseData((prev) => prev.filter((i) => i.id !== id));
        console.log("Expense successfully deleted");
      }
    } catch (error) {}
  };

  const updateExpenseItemhandler = async (updatedData) => {
    try {
      const response = await fetch(
        `https://expensetracker-ec1d7-default-rtdb.firebaseio.com/expense/${updatedData.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            description: updatedData.description,
            amount: updatedData.amount,
            category: updatedData.category,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setExpenseData((prev) => {
          const newData = prev.map((i) => {
            if (updatedData.id == i.id) {
              return {
                ...i,
                description: updatedData.description,
                category: updatedData.category,
                amount: updatedData.amount,
              };
            } else {
              return i;
            }
          });
          return newData;
        });
      }
      if (response.ok) {
        console.log("Expense successfully updated");
      }
    } catch (error) {}
  };

  const expenseCtx = {
    expenseItems: expensedata,
    addItem: addExpenseItemHandler,
    removeItem: removeExpenseItemHandler,
    updateItem: updateExpenseItemhandler,
  };

  return (
    <expenseDataContext.Provider value={expenseCtx}>
      {children}
    </expenseDataContext.Provider>
  );
};

export default expenseDataContext;
