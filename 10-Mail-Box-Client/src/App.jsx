import "./App.css";
import SignUpForm from "./component/SignUpForm";
import ComposeEmail from "./component/ComposeEmail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editors from "./component/Editors";
import Inbox from "./component/inbox/Inbox";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Inbox />,
//   },
// ]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inbox />}></Route>
        <Route path="/compose" element={<ComposeEmail />}></Route>
        <Route path="*" element={<Inbox />}></Route>
      </Routes>
    </BrowserRouter>
  );

  // return <RouterProvider router={router} />;
}

export default App;
