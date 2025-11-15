import "./App.css";
import { Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import ResetPassword from "./pages/ResetPassword";
import Welcomepage from "./component/Welcomepage";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Switch>
      <Route path="/" exact>
        {isLoggedIn ? <Welcomepage /> : <Signup />}
      </Route>

      <Route path="/update" exact>
        {isLoggedIn ? <UpdateProfilePage /> : <Signup />}
      </Route>

      <Route path="/ResetPassword" exact>
        <ResetPassword />
      </Route>

      <Route path="*">{isLoggedIn ? <Welcomepage /> : <Signup />}</Route>
    </Switch>
  );
}

export default App;
