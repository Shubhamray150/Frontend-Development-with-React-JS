import { useContext, useState } from "react";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import expenseContext from "./store/expenseContext";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import ResetPassword from "./pages/ResetPassword";
import Welcomepage from "./component/Welcomepage";

function App() {
  const expenseCtx = useContext(expenseContext);

  return (
    <Switch>
      <Route path="/" exact>
        {!expenseCtx.isLoggedIn && <Signup />}
        {expenseCtx.isLoggedIn && <Welcomepage />}
      </Route>

      <Route path="/update" exact>
        {!expenseCtx.isLoggedIn && <Signup />}
        {expenseCtx.isLoggedIn && <UpdateProfilePage />}
      </Route>

      <Route path="/ResetPassword" exact>
        <ResetPassword />
      </Route>

      <Route path="*">
        <Signup />
      </Route>
    </Switch>
  );
}

export default App;
