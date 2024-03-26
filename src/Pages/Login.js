import React from "react";
import BackDrop from "../UI/BackDrop";
import ReactDOM from "react-dom";

import { useLocation } from "react-router-dom";
import background from "../Assets/hero-image.jpg";
// import "./login.css";

const Login = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isPathMatched = currentPath === "/staff/login";
  return (
    <div
      className="bg-no-repeat bg-center bg-cover h-[100vh] z-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      {isPathMatched &&
        ReactDOM.createPortal(
          <BackDrop />,
          document.getElementById("backdrop-root")
        )}
    </div>
  );
};

export default Login;
