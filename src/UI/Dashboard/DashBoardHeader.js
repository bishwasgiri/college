import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import AuthContext from "../../Store/Auth-context";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../Assets/logos.png";
import {
  alumniIcon,
  avatarIcon,
  crossIcon,
  dashboardIcon,
  downArrowIcon,
  eventIcon,
  homeIcon,
  logoutIcon,
  manageIcon,
  noticeIcon,
  profileIcon,
  rightArrowIcon,
  teacherIcon,
  userIcon,
} from "../../Assets/Svg/asset";

const DashBoardHeader = (props) => {
  const { dispatch } = useContext(AuthContext);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isManageOpen, setIsManageOpen] = useState(false);
  const [isHamClicked, setIsHamClicked] = useState(false);

  const location = useLocation();

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  const activeLink =
    " group flex items-center text-2xl p-3 rounded-lg  bg-[#A34463] shadow-2xl hover:transition hover:duration-300 hover:ease-in-out";
  const normalLink =
    "group flex items-center text-2xl p-3 hover:transition hover:duration-500 hover:ease-in-out hover:bg-[#A34463] hover:rounded-lg hover:shadow-2xl hover:translate-x-1 transition-transform duration-500)";

  const handleLinkClick = () => {
    setIsUserOpen(!isUserOpen);
  };

  const handleLogout = async () => {
    console.log("loguot clicked");
    localStorage.removeItem("user");
    dispatch({
      type: "LOGOUT",
      payload: {
        user: null,
      },
    });
  };

  const handleHamburger = () => {
    console.log("ham is clicked");
    setIsHamClicked(!isHamClicked);
    props.handleisHamClicked();
  };

  return (
    <div className="dashboard-container ">
      <div className="">
        <AnimatePresence initial={false}>
          {/* {!isHamClicked && ( */}
          <motion.ul
            initial={!isHamClicked ? "open" : "closed"}
            animate={!isHamClicked ? "open" : "closed"}
            variants={{
              open: { width: "288px" },
              closed: { width: "120px" },
            }}
            transition={{
              duration: 0.4,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="h-full fixed top-0 left-0 z-40 p-5 flex flex-col items-start  shadow-2xl  bg-gradient-to-b from-primary to-black rounded-r-sm "
          >
            <li className="p-2 w-full mb-10">
              <NavLink
                to="/admin/dashboard"
                className="flex justify-center items-center"
              >
                <div className="">
                  <img src={logo} alt="logo" className="w-full bg-white" />
                </div>
                {!isHamClicked && (
                  <div className="flex flex-col items-start ml-5">
                    <span className="text-3xl text-white">GMC</span>
                    <span className="text-3xl text-white">Campus</span>
                  </div>
                )}
              </NavLink>
            </li>
            <li className="p-2 w-full text-white">
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) => {
                  return isActive ? activeLink : normalLink;
                }}
              >
                {dashboardIcon}

                {!isHamClicked && (
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-500">
                    Dashboard
                  </span>
                )}
              </NavLink>
            </li>
            <li className="p-2 w-full text-white">
              <NavLink
                to="/admin/profile"
                className={({ isActive }) => {
                  return isActive ? activeLink : normalLink;
                }}
              >
                {profileIcon}

                {!isHamClicked && (
                  <span className="ml-2 hover:translate-x-1 transition-transform duration-500">
                    Profile
                  </span>
                )}
              </NavLink>
            </li>
            <li className="p-2 w-full text-white">
              <div
                onClick={handleLinkClick}
                className="flex items-center justify-between text-2xl p-3 cursor-pointer hover:transition hover:duration-300 hover:ease-in-out hover:bg-[#A34463] hover:rounded-lg hover:shadow-2xl"
              >
                <div className="flex items-center">
                  {userIcon}
                  {!isHamClicked && (
                    <span className="ml-2 hover:translate-x-1 transition-transform duration-500">
                      Users
                    </span>
                  )}
                </div>

                <AnimatePresence initial={false}>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isUserOpen ? 90 : 0 }}
                    exit={{ rotate: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    {rightArrowIcon}
                  </motion.div>
                </AnimatePresence>
              </div>
              <AnimatePresence initial={false}>
                {isUserOpen && (
                  <motion.ul
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <li className="p-1 ml-3 ">
                      <NavLink
                        to="/admin/user-teacher?manageOpen=true"
                        className={({ isActive }) => {
                          return isActive ? activeLink : normalLink;
                        }}
                      >
                        {alumniIcon}
                        {!isHamClicked && <span className="ml-1">Alumni</span>}
                      </NavLink>
                    </li>
                    <li className="p-1 ml-3 ">
                      <NavLink
                        to="/admin/user-alumni?manageOpen=true"
                        className={({ isActive }) => {
                          return isActive ? activeLink : normalLink;
                        }}
                        // className="text-2xl"
                      >
                        {teacherIcon}
                        {!isHamClicked && (
                          <span className="ml-1">Teachers</span>
                        )}
                      </NavLink>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className="p-2 w-full text-white">
              <div
                onClick={() => setIsManageOpen(!isManageOpen)}
                className="flex items-center justify-between text-2xl p-3 cursor-pointer hover:transition hover:duration-300 hover:ease-in-out hover:bg-[#A34463] hover:rounded-lg hover:shadow-2xl"
              >
                <div className="flex items-center">
                  {manageIcon}
                  {!isHamClicked && (
                    <span className="ml-2 hover:translate-x-1 transition-transform duration-500">
                      Manage
                    </span>
                  )}
                </div>
                <AnimatePresence initial={false}>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isManageOpen ? 90 : 0 }}
                    exit={{ rotate: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    {rightArrowIcon}
                  </motion.div>
                </AnimatePresence>
              </div>
              <AnimatePresence initial={false}>
                {isManageOpen && (
                  <motion.ul
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <li className="p-1 ml-3 ">
                      <NavLink
                        to="/admin/manage-events?manageOpen=true"
                        className={({ isActive }) => {
                          return isActive ? activeLink : normalLink;
                        }}
                      >
                        {eventIcon}
                        {!isHamClicked && <span className="ml-1">Events</span>}
                      </NavLink>
                    </li>
                    <li className="p-1 ml-3 ">
                      <NavLink
                        to="/admin/manage-notice?manageOpen=true"
                        className={({ isActive }) => {
                          return isActive ? activeLink : normalLink;
                        }}
                      >
                        {noticeIcon}
                        {!isHamClicked && <span className="ml-1">Notice</span>}
                      </NavLink>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className="p-2 w-full text-white">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? activeLink : normalLink;
                }}
              >
                {homeIcon}
                {!isHamClicked && (
                  <span className="ml-2 hover:translate-x-1 transition-transform duration-500">
                    Home
                  </span>
                )}
              </NavLink>
            </li>
            <li className="p-2 w-full text-white">
              <NavLink to="/" onClick={handleLogout} className={normalLink}>
                {logoutIcon}
                {!isHamClicked && (
                  <span className="ml-2 hover:translate-x-1 transition-transform duration-500">
                    Logout
                  </span>
                )}
              </NavLink>
            </li>
          </motion.ul>
          {/* )} */}
        </AnimatePresence>
      </div>
      <motion.div
        initial={!isHamClicked ? "open" : "closed"}
        animate={!isHamClicked ? "open" : "closed"}
        variants={{
          open: { marginLeft: "288px" },
          closed: { marginLeft: "124px" },
        }}
        transition={{
          duration: 0.4,
          ease: [0.04, 0.62, 0.23, 0.98],
        }}
      >
        <div className="flex justify-between items-center text-2xl p-5">
          <div className="cursor-pointer" onClick={handleHamburger}>
            {isHamClicked ? crossIcon : <RxHamburgerMenu />}
          </div>
          <div className="hidden opacity-60 lg:flex ">Date:{formattedDate}</div>
          <div className="search-content">
            <form className="hidden lg:flex items-center">
              <div className="cursor-pointer">
                <CiSearch />
              </div>
              <div className="p-2">
                <input
                  className="p-2 w-3/5"
                  type="text"
                  placeholder="Search Here..."
                />
              </div>
            </form>
          </div>
          <div className="flex items-center bg-primary text-white rounded-lg  p-2 relative hover:transition hover:duration-300 hover:ease-in-out hover:bg-[#A34463] hover:shadow-2xl">
            <div
              className="flex items-center cursor-pointer justify-center p-2  space-x-2"
              onClick={() => setIsLogoutOpen(!isLogoutOpen)}
            >
              {avatarIcon}
              <p className=""> admin</p>
              {downArrowIcon}
            </div>
            <AnimatePresence initial={false}>
              {isLogoutOpen && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <Link
                    to="/"
                    className="absolute right-0 top-16 w-full mt-2 text-[#A34463] text-xl p-3 cursor-pointer shadow-md flex  justify-center items-center rounded-lg group"
                    onClick={handleLogout}
                  >
                    {logoutIcon}

                    <span className="ml-2  group-hover:translate-x-1 transition-transfrom duration-500">
                      Logout
                    </span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashBoardHeader;
