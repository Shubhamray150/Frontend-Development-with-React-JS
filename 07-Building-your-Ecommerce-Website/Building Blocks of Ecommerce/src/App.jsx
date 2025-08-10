import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import About from "./components/header/About";
import Store from "./components/header/Store";
import Home from "./components/header/Home";
import Contact from "./components/header/Contact";
import ProductDetail from "./components/header/Cart/ProductDetail";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/store">
          <Store />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/product-detail/:ProductID" exact>
          <ProductDetail />
        </Route>
      </Switch>
    </>
  );
}

export default App;

{
  /* <RouterProvider router={route} /> */
}
// const route = createBrowserRouter([
//   {
//     path: "/store",
//     element: <Store />,
//   },

//   {
//     path: "/",
//     element: (
//       <>
//         <Home />
//       </>
//     ),
//   },

//   {
//     path: "/about",
//     element: (
//       <>
//         <About />
//       </>
//     ),
//   },

//   {
//     path: "/contact",
//     element: (
//       <>
//         <Contact />
//       </>
//     ),
//   },

//   {
//     path: "/product-details/:ProductId",
//     element: (
//       <>
//         <ProductDetail />
//       </>
//     ),
//   },
// ]);
