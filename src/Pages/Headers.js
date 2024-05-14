import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import { IoMailOutline } from "react-icons/io5";
import { PiPhoneCallLight } from "react-icons/pi";
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
    <header className="h-[18vh] flex flex-col fixed top-0 left-0 right-0  bg-white  z-50">
      <div className="w-full mx-auto md:w-4/5 ">
        <div className="flex flex-col items-center justify-center space-y-2 p-3 md:flex-row md:justify-between">
          <div className="flex justify-between items-center space-x-4">
            <span className="  text-primary cursor-pointer hover:text-black flex justify-between items-center space-x-2">
              <PiPhoneCallLight />
              <span className="">+977908103562</span>
            </span>
            <span className="  text-primary cursor-pointer hover:text-black flex justify-between items-center space-x-2">
              <IoMailOutline />
              <span className="">gaurishanakar@gmail.com</span>
            </span>
          </div>
          <div className="flex justify-between items-center space-x-10">
            <span className="  text-primary cursor-pointer hover:text-black">
              <Link to="/">Notice</Link>
            </span>
            <span className="  text-primary cursor-pointer hover:text-black">
              <Link to="/">Alumni</Link>
            </span>
            <span className="  text-primary cursor-pointer hover:text-black">
              {!user ? (
                <Link to="/staff/login">Login</Link>
              ) : (
                <Link to="/admin/dashboard">Dashboard</Link>
              )}
            </span>
          </div>
        </div>
      </div>

      <div className=" bg-primary h-4/5">
        <nav className="w-full mx-auto md:w-4/5 flex justify-between items-center h-full p-3">
          <div className="w-20">
            <img src={logo} alt="logo" className="w-full bg-white" />
          </div>
          <ul className="hidden lg:flex justify-around items-center space-x-5 text-2xl font-light tracking-wide">
            <motion.li className="" initial="initial" whileHover="hover">
              <Link className="text-white block relative" href="">
                Home
                <motion.span
                  className="bg-white h-[2px] mt-1 w-full block absolute origin-left rounded-md"
                  variants={lineVariant}
                ></motion.span>
              </Link>
            </motion.li>
            <motion.li className="" initial="initial" whileHover="hover">
              <Link className="text-white block relative">
                About
                <motion.span
                  className="bg-white h-[2px] mt-1 w-full block absolute origin-left rounded-md"
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
                  className="bg-white h-[2px] mt-1 w-full block absolute origin-left rounded-md"
                  variants={lineVariant}
                ></motion.span>
              </Link>
            </motion.li>
            <motion.li className="" initial="initial" whileHover="hover">
              <Link className="text-white block relative" href="">
                Academics
                <motion.span
                  className="bg-white h-[2px] mt-1 w-full block absolute origin-left rounded-md"
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
                  className="bg-white h-[2px] mt-1 w-full block absolute origin-left rounded-md"
                  variants={lineVariant}
                ></motion.span>
              </Link>
            </motion.li>
            <motion.li className="" initial="initial" whileHover="hover">
              <Link className="text-white block relative" href="">
                Download
                <motion.span
                  className="bg-white h-[2px] mt-1 w-full block absolute origin-left rounded-md"
                  variants={lineVariant}
                ></motion.span>
              </Link>
            </motion.li>
            <motion.li className="" initial="initial" whileHover="hover">
              <Link className="text-white block relative" href="">
                Gallery
                <motion.span
                  className="bg-white h-[2px] mt-1 w-full block absolute origin-left rounded-md"
                  variants={lineVariant}
                ></motion.span>
              </Link>
            </motion.li>
          </ul>
          <div className="lg:hidden text-white cursor-pointer ">
            <RxHamburgerMenu size={35} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Headers;
