import "./App.css";
import SignUpForm from "./component/SignUpForm";
import ComposeEmail from "./component/ComposeEmail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Editors from "./component/Editors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComposeEmail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
