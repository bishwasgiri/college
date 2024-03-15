import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <div className="college-info">
          <div className="head">
            <span>School of Technology</span>
            <span>Since 1980</span>
          </div>
          <div className="promise">
            <p>
              SOT transforms lives through acessible, student centered,high
              quality education
            </p>
          </div>
          <div className="phone">91112324491</div>
          <div className="email">demo@email.com</div>
          <div className="all-right">2023 All Rights Reserved</div>
        </div>

        <div className="college-shorcut">
          <div className="about">
            <h3>About</h3>
            <ul>
              <li>
                <Link href="">About</Link>
              </li>
              <li>
                <Link href="">Admissions</Link>
              </li>
              <li>
                <Link href="">Academics</Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3>Links</h3>
            <ul>
              <li>
                <Link href="">Student</Link>
              </li>
              <li>
                <Link href="">Staff</Link>
              </li>
              <li>
                <Link href="">Alumni</Link>
              </li>
              <li>
                <Link href="">Faculties</Link>
              </li>
            </ul>
          </div>
          <div className="social">
            <h3>Connect With Us</h3>
            <ul>
              <li>
                <Link href="">Facebook</Link>
              </li>
              <li>
                <Link href="">Twitter</Link>
              </li>
              <li>
                <Link href="">Instagram</Link>
              </li>
              <li>
                <Link href="">Youtube</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
