import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const toggleAuth = () => {
    setIsAuth((prev) => !prev);
  };

  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
