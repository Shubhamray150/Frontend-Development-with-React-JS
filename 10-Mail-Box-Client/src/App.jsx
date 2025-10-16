import "./App.css";
import SignUpForm from "./component/auth/SignUpForm";
import ComposeEmail from "./component/compose/ComposeEmail";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inbox from "./component/inbox/Inbox";
import { useSelector } from "react-redux";
import MaillViewDetailed from "./component/inbox/MailList/MailMessage/MaillViewDetailed";

function App() {
  const state = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            state.token ? <Navigate to="/inbox" /> : <Navigate to="/auth" />
          }
        ></Route>
        <Route
          path="/auth"
          element={state.token ? <Navigate to="/inbox" /> : <SignUpForm />}
        ></Route>
        <Route
          path="/compose"
          element={state.token ? <ComposeEmail /> : <Navigate to="/auth" />}
        ></Route>
        <Route
          path="/:folder"
          element={state.token ? <Inbox /> : <Navigate to="/auth" />}
        ></Route>
        <Route
          path="/:folder/:id"
          element={
            state.token ? <MaillViewDetailed /> : <Navigate to="/auth" />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
