import { useContext, useState } from "react";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import expenseContext from "./store/expenseContext";
import UpdateProfilePage from "./pages/UpdateProfilePage";

function App() {
  const expenseCtx = useContext(expenseContext);

  return (
    <Switch>
      <Route path="/" exact>
        {!expenseCtx.isLoggedIn && <Signup />}
        {expenseCtx.isLoggedIn && <HomePage />}
      </Route>
      <Route path="/update">
        {!expenseCtx.isLoggedIn && <Signup />}
        {expenseCtx.isLoggedIn && <UpdateProfilePage />}
      </Route>
      <Route path="*">
        <Signup />
      </Route>
      <Signup />
    </Switch>
  );
}

export default App;
