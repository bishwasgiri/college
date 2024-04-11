import React, { useEffect } from "react";
// import Card from "./Card";
import { useLocation } from "react-router-dom";

import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/Home/SignUpForm";

const Modal = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isLoginPath = currentPath === "/staff/login";
  const isSignPath = currentPath === "/staff/signup";
  return (
    <>
      <div className="bg-white p-10 rounded">
        {isLoginPath && <LoginForm />}
        {isSignPath && <SignUpForm />}
      </div>
    </>
  );
};

export default Modal;
