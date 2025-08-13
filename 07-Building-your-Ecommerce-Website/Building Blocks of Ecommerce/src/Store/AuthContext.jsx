import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  let storageToken = JSON.parse(localStorage.getItem("token"));
  const [token, setToken] = useState(storageToken);
  const userIsLoggedIn = !!token;

  const loginHandler = (token, email) => {
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("email", JSON.stringify(email));
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  console.log(userIsLoggedIn);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
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
