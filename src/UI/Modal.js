import React, { useEffect } from "react";
import Card from "./Card";
import { RiUserLine } from "react-icons/ri";
import { PiLockKey } from "react-icons/pi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Modal = () => {
  const [userName, setUsername] = useState("");
  const [userPassword, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userName);
    if (userName === "admin" && userPassword === "admin123") {
      navigate("/admin/dashboard");
    }
  };

  return (
    <>
      <div className="bg-white p-10">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <h1 className="mb-5 text-3xl text-primary">Admin Login</h1>
            <span>username: admin</span>
            <div className="m-3 relative">
              <div className="absolute right-3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <RiUserLine />
              </div>
              <input
                type="text"
                id="username"
                placeholder="Enter Username"
                className="outline-none border-2 rounded border-primary p-3"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={userName}
              />
            </div>
            <span>password: admin123</span>
            <div className="m-3 relative">
              <div className="absolute right-3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <PiLockKey />
              </div>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="outline-none border-2 rounded border-primary p-3"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={userPassword}
              />
              {/* <span>password: admin123</span> */}
            </div>
          </div>
          <div className="mt-5 flex items-center ">
            <button
              className="block bg-primary text-white p-3 cursor-pointer text-xl m-3"
              type="submit"
            >
              Login
            </button>

            <span className="block text-primary text-xl cursor-pointer ">
              Forgot Password ?
            </span>
          </div>
          <div className="mt-5">
            <Link to="/" className="text-xl text-primary">
              Go BackWards
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
