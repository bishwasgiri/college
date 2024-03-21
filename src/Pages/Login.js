import React from "react";
import BackDrop from "../UI/BackDrop";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";

import "./login.css";

const Login = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isPathMatched = currentPath === "/staff/login";
  return (
    <div className="login-container">
      <h1>Login page</h1>
      {isPathMatched &&
        ReactDOM.createPortal(
          <BackDrop />,
          document.getElementById("backdrop-root")
        )}
    </div>
  );
};

export default Login;
