import "./App.css";
import SignUpForm from "./component/auth/SignUpForm";
import ComposeEmail from "./component/compose/ComposeEmail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editors from "./component/compose/Editors";
import Inbox from "./component/inbox/Inbox";
import MailMessage from "./component/inbox/MailList/MailMessage/MailMessage";
import Header from "./component/inbox/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inbox />}></Route>
        <Route path="/compose" element={<ComposeEmail />}></Route>
        <Route path="/message" element={<MailMessage />}></Route>
        <Route path="*" element={<Inbox />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
