import React, { useState } from "react";

const ExpenseContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const ExpenseContextProvider = ({ children }) => {
  const localtoken = localStorage.getItem("token");
  const [token, setToken] = useState(localtoken);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const expenseCtx = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <ExpenseContext.Provider value={expenseCtx}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
