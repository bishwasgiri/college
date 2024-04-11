import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import BackDrop from "../UI/BackDrop";
import Modal from "../UI/Modal";
import logo from "../Assets/logo.jpg";

import "./header.css";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const [isLoginClicked, setLoginClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleLogin = () => {
  //   console.log("login clicked");
  //   setLoginClicked(true);
  // };

  return (
    <>
      {/* {isLoginClicked &&
        ReactDOM.createPortal(
          <BackDrop />,
          document.getElementById("backdrop-root")
        )} */}

      {/* {isLoginClicked &&
        ReactDOM.createPortal(<Modal />, document.getElementById("modal-root"))} */}
      <header
        className="header"
        style={{
          padding: scrollPosition > 160 ? "0px 20px" : "",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="header-center">
          <div className="w-[300px]">
            <img src={logo} alt="logo" className="w-full" />
          </div>
          <div className="right-header">
            {/* {scrollPosition > 80? } */}
            <div
              className="shortcut-header"
              style={{ display: scrollPosition > 160 ? "none" : "" }}
            >
              <div className="shortcut-content">
                <Link to="/about/student" className="quick-links">
                  Student
                </Link>
                <Link to="/about/staff" className="quick-links">
                  Staff
                </Link>
                <Link to="/about/alumni" className="quick-links">
                  Alumni
                </Link>
                <Link to="/about/faculties" className="quick-links">
                  Faculties
                </Link>
                <Link
                  to="/staff/login"
                  className="quick-links"
                  style={{ color: "red" }}
                  // onClick={handleLogin}
                >
                  Connect
                </Link>
              </div>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/academics">Academics</Link>
                </li>

                <li>
                  <Link to="/admissions">Admissions</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
