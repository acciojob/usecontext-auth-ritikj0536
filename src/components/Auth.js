import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const Auth = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>

      {/* 👇 className REQUIRED by Cypress test */}
      <p className="authText">
        {isAuth ? "you are authenticated" : "you are not authenticated"}
      </p>

      <label>
        <input type="checkbox" onChange={toggleAuth} />
        I'm not a robot
      </label>
    </div>
  );
};

export default Auth;
