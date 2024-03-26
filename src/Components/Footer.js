import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary p-20 mt-10">
      <footer className="flex justify-around md:items-center text-white opacity-60">
        <div className=" flex-1 flex flex-col items-center md:items-start">
          <div className="flex flex-col mb-3">
            <span className="text-3xl">School of Technology</span>
            <span className="text-2xl">Since 1980</span>
          </div>
          <div className="text-xl">
            <p className="text-xl mb-3">
              SOT transforms lives through acessible, student centered,high
              quality education
            </p>
          </div>
          <div className="text-xl ">91112324491</div>
          <div className="text-xl ">demo@gmail.com</div>
          <div className="text-xl">2023 All Rights Reserved</div>
        </div>

        <div className="hidden flex-1 md:flex justify-between md:border-l-2 border-white p-10">
          <div className="">
            <h3 className="text-2xl mb-3">About</h3>
            <ul className="">
              <li>
                <Link href="" className="text-xl">
                  Notice
                </Link>
              </li>
              <li>
                <Link href="" className="text-xl">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="" className="text-xl">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="" className="text-xl">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3 className="text-2xl mb-3">Links</h3>
            <ul>
              <li>
                <Link href="" className="text-xl">
                  Student
                </Link>
              </li>
              <li>
                <Link href="" className="text-xl">
                  Staff
                </Link>
              </li>
              <li>
                <Link href="" className="text-xl">
                  Alumni
                </Link>
              </li>
              <li>
                <Link href="" className="text-xl">
                  Faculties
                </Link>
              </li>
            </ul>
          </div>
          <div className="social">
            <h3 className="text-2xl mb-3">Connect With Us</h3>
            <ul>
              <li>
                <Link href="" className="text-xl">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="" className="text-xl">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="" className="text-xl">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="" className="text-xl">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
