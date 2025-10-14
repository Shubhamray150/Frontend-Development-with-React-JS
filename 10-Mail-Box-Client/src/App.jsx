import "./App.css";
import SignUpForm from "./component/auth/SignUpForm";
import ComposeEmail from "./component/compose/ComposeEmail";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inbox from "./component/inbox/Inbox";
import MailMessage from "./component/inbox/MailList/MailMessage/MailMessage";
import { useSelector } from "react-redux";
import MailView from "./component/inbox/MailList/MailMessage/MailMessageView";

function App() {
  const state = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={state.token ? <Navigate to="/" /> : <SignUpForm />}
        ></Route>
        <Route
          path="/compose"
          element={state.token ? <ComposeEmail /> : <Navigate to="/auth" />}
        ></Route>

        <Route
          path="/message"
          element={state.token ? <MailMessage /> : <Navigate to="/auth" />}
        ></Route>
        <Route
          path="/inbox/*"
          element={state.token ? <Inbox /> : <Navigate to="/auth" />}
        ></Route>
        <Route
          path="*"
          element={state.token ? <Inbox /> : <Navigate to="/auth" />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
