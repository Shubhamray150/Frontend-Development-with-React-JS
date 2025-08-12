import React, { useState } from "react";
import { Redirect } from "react-router-dom";
const AuthContext = React.createContext({
  token: "",
  isLoggedin: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  let localtoken = JSON.parse(localStorage.getItem("token"));
  const localTime = JSON.parse(localStorage.getItem("authTime"));

  if (localTime < new Date().getTime()) {
    localtoken = null;
  } else {
    console.log(localTime - new Date().getTime());
  }

  const [token, setToken] = useState(localtoken);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    const expirationTime = new Date().getTime() + 1 * 60 * 1000;
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("authTime", JSON.stringify(expirationTime));
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("authTime");
  };

  const contextValue = {
    token: token,
    isLoggedin: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
