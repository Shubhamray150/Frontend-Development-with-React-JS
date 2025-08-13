import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import About from "./components/header/About";
import Store from "./components/header/Store";
import Home from "./components/header/Home";
import Contact from "./components/header/Contact";
import ProductDetail from "./components/header/Cart/ProductDetail";
import Header from "./components/header/Header";
import Login from "./components/header/Login";
import AuthContext from "./Store/AuthContext";
import { useContext } from "react";

function App() {
  const AuthCtx = useContext(AuthContext);
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
          {AuthCtx.isLoggedIn && <Store />}
          {!AuthCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/product-detail/:ProductID" exact>
          <ProductDetail />
        </Route>
      </Switch>
    </>
  );
}

export default App;
