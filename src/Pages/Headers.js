import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
// import { useContext } from "react";
import AuthContext from "../Store/Auth-context";
import logo from "../Assets/logos.png";

const lineVariant = {
  initial: { opacity: 0, scaleX: 0 },
  hover: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const linkHeaderVariant = {
  initial: { opacity: 0, y: 10 },
  hover: {
    delay: 0.2,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const Headers = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <header className="h-[18vh] flex flex-col fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex justify-around h-1/5  p-2 m-2 md:p-1">
        <div className="left">
          <span className="mr-3 p-5 text-primary cursor-pointer hover:text-black">
            +977908103562
          </span>
          <span className="mr-3 p-5 text-primary cursor-pointer hover:text-black">
            demo@gmail.com
          </span>
        </div>
        <div className="right">
          <span className="mr-3 p-5 text-primary cursor-pointer hover:text-black">
            <Link to="/">Notice</Link>
          </span>
          <span className="mr-3 p-5 text-primary cursor-pointer hover:text-black">
            <Link to="/">Alumni</Link>
          </span>
          <span className="mr-3 p-5 text-primary cursor-pointer hover:text-black">
            {!user ? (
              <Link to="/staff/login">Login</Link>
            ) : (
              <Link to="/admin/dashboard">Dashboard</Link>
            )}
          </span>
        </div>
      </div>
      <nav className="flex justify-between md:justify-around items-center p-4 bg-primary h-4/5 f">
        <div className="w-20">
          <img
            src={logo}
            alt="logo"
            className="w-full bg-white"
            loading="lazy"
          />
        </div>
        <ul className="hidden md:flex items-center">
          <motion.li className="" initial="initial" whileHover="hover">
            <Link className="text-white block relative" href="">
              Home
              <motion.span
                className="bg-white h-1 w-full block absolute origin-left"
                variants={lineVariant}
              ></motion.span>
            </Link>
          </motion.li>
          <motion.li className="" initial="initial" whileHover="hover">
            <Link className="text-white block relative">
              About
              <motion.span
                className="bg-white h-1 w-full block absolute origin-left"
                variants={lineVariant}
              ></motion.span>
            </Link>
            <motion.span
              className="bg-white text-black block absolute mt-5 p-3"
              variants={linkHeaderVariant}
            >
              <Link className="block">Alumni</Link>
              <Link className="block">Staff</Link>
              <Link className="block">Student</Link>
              <Link className="block">Faculties</Link>
            </motion.span>
          </motion.li>
          <motion.li className="" initial="initial" whileHover="hover">
            <Link className="text-white block relative" href="">
              Admission
              <motion.span
                className="bg-white h-1 w-full block absolute origin-left"
                variants={lineVariant}
              ></motion.span>
            </Link>
          </motion.li>
          <motion.li className="" initial="initial" whileHover="hover">
            <Link className="text-white block relative" href="">
              Academics
              <motion.span
                className="bg-white h-1 w-full block absolute origin-left"
                variants={lineVariant}
              ></motion.span>
            </Link>
            <motion.span
              className="bg-white text-black block absolute mt-5 p-3"
              variants={linkHeaderVariant}
            >
              <Link className="block">High School</Link>
              <Link className="block">Bachelors</Link>
              <Link className="block">Masters</Link>
            </motion.span>
          </motion.li>
          <motion.li className="" initial="initial" whileHover="hover">
            <Link className="text-white block relative" href="">
              Contact
              <motion.span
                className="bg-white h-1 w-full block absolute origin-left"
                variants={lineVariant}
              ></motion.span>
            </Link>
          </motion.li>
          <motion.li className="" initial="initial" whileHover="hover">
            <Link className="text-white block relative" href="">
              Download
              <motion.span
                className="bg-white h-1 w-full block absolute origin-left"
                variants={lineVariant}
              ></motion.span>
            </Link>
          </motion.li>
          <motion.li className="" initial="initial" whileHover="hover">
            <Link className="text-white block relative" href="">
              Gallery
              <motion.span
                className="bg-white h-1 w-full block absolute origin-left"
                variants={lineVariant}
              ></motion.span>
            </Link>
          </motion.li>
        </ul>
        <div className="md:hidden text-white cursor-pointer">
          <RxHamburgerMenu size={35} />
        </div>
      </nav>
    </header>
  );
};

export default Headers;
