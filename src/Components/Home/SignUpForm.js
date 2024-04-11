import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import { PiLockKey } from "react-icons/pi";
import AuthContext from "../../Store/Auth-context";

const SignUpForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [error, setError] = useState("");

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(userEmail, userPassword);

    const response = await fetch(
      "http://localhost:5000/api/admin/create-admin",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, password: userPassword }),
      }
    );

    const json = await response.json();

    console.log("response is", json);
    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      // save user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      setError(false);
      navigate("/admin/dashboard");
      dispatch({ type: "LOGIN", payload: json });
    }
  };
  return (
    <>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <h1 className="mb-5 text-3xl text-primary">Create Admin</h1>
          <div className="m-3 relative">
            <div className="absolute right-3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <RiUserLine />
            </div>
            <input
              type="email"
              id="username"
              placeholder="Enter Email"
              className="outline-none border-2 rounded border-primary p-3"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              value={userEmail}
            />
          </div>
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
          </div>
        </div>
        <div className="mt-5 flex items-center ">
          <button
            className="block bg-primary text-white p-3 cursor-pointer text-xl m-3"
            type="submit"
          >
            Create
          </button>
        </div>
        <div className="mt-5 flex flex-col">
          <Link to="/staff/login" className="text-xl text-primary mb-2">
            Go BackWards
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
