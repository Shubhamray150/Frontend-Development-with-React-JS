import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import About from "./components/header/About";
import Store from "./components/header/Store";
import Home from "./components/header/Home";
import Contact from "./components/header/Contact";
import ProductDetail from "./components/header/Cart/ProductDetail";
import Header from "./components/header/Header";
import Login from "./components/header/Login";
import { AuthContextProvider } from "./Store/AuthContext";

function App() {
  return (
    <AuthContextProvider>
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

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/product-detail/:ProductID" exact>
          <ProductDetail />
        </Route>
      </Switch>
    </AuthContextProvider>
  );
}

export default App;
