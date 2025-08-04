import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/header/About";
import Store from "./components/header/Store";
import Home from "./components/header/Home";

const route = createBrowserRouter([
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/home",
    element: (
      <>
        <Home />
        {/* <Header />
        <div className="text-center my-5">Store Page Coming Soon</div>
        <Footer /> */}
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
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
