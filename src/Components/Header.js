import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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
  return (
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
        <div className="left-header">
          {/* <img src="" alt="" /> */}
          <h1 style={{ fontSize: scrollPosition > 160 ? "25px" : "" }}>
            School of Technology
          </h1>
        </div>
        <div className="right-header">
          {/* {scrollPosition > 80? } */}
          <div
            className="shortcut-header"
            style={{ display: scrollPosition > 160 ? "none" : "" }}
          >
            <div className="shortcut-content">
              <div className="quick-links">Student</div>
              <div className="quick-links">Staff</div>
              <div className="quick-links">Alumni</div>
              <div className="quick-links">Faculties</div>
              <div className="quick-links">Connect</div>
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
  );
};

export default Header;
