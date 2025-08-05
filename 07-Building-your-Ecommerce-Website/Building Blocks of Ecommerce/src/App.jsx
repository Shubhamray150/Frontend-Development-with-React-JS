import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/header/About";
import Store from "./components/header/Store";
import Home from "./components/header/Home";
import Contact from "./components/header/Contact";

const route = createBrowserRouter([
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <About />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Contact />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
