import React, { useEffect } from "react";
import Card from "./Card";
import { RiUserLine } from "react-icons/ri";
import { PiLockKey } from "react-icons/pi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

// import useHistory from "react-router-dom";
import "./modal.css";

const Modal = () => {
  const [userName, setUsername] = useState("");
  const [userPassword, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName === "admin" && userPassword === "admin123") {
      navigate("/admin/dashboard");
    }
  };

  return (
    <Card>
      <form action="" className="modal-wrapper" onSubmit={handleSubmit}>
        <div className="modal-content">
          <h1 style={{ padding: "10px", opacity: "0.7" }}>Login</h1>
          <div className="modal-grp">
            <div className="icons">
              <RiUserLine />
            </div>

            <input
              type="text"
              id="username"
              placeholder="Enter username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={userName}
            />
            <span>username: admin</span>
          </div>
          <div className="modal-grp">
            <div className="icons">
              <PiLockKey />
            </div>

            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={userPassword}
            />
            <span>password: admin123</span>
          </div>
        </div>
        <div className="forgot-link">
          <button className="login-btn" type="submit">
            Login
          </button>

          <a href="">Forgot Password ?</a>
        </div>
      </form>
    </Card>
  );
};

export default Modal;
