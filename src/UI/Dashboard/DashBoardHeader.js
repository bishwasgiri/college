import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import AuthContext from "../../Store/Auth-context";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../Assets/logos.png";

const DashBoardHeader = () => {
  const { dispatch } = useContext(AuthContext);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isManageOpen, setIsManageOpen] = useState(false);
  const location = useLocation();

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  const activeLink =
    " group flex items-center text-2xl p-3 rounded-lg  bg-[#A34463] shadow-2xl hover:transition hover:duration-300 hover:ease-in-out";
  const normalLink =
    "group flex items-center text-2xl p-3 hover:transition hover:duration-500 hover:ease-in-out hover:bg-[#A34463] hover:rounded-lg hover:shadow-2xl hover:translate-x-1 transition-transform duration-500)";

  useEffect(() => {
    // Check if the URL contains a parameter indicating that the accordion should be open
    const params = new URLSearchParams(location.search);
    const isOpenParam = params.get("manageOpen");
    setIsManageOpen(isOpenParam === "true");
  }, [location.search]);

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

  return (
    <div className="dashboard-container ">
      <div className="">
        <ul className="h-full w-72 fixed top-0 left-0 z-40 p-5 flex flex-col items-start  shadow-2xl  bg-primary">
          <li className="p-2 w-full mb-10">
            <NavLink
              to="/admin/dashboard"
              className="flex justify-center items-center"
            >
              <div className="">
                <img src={logo} alt="logo" className="w-full bg-white" />
              </div>
              <div className="flex flex-col items-start ml-5">
                <span className="text-3xl text-white">GMC</span>
                <span className="text-3xl text-white">Campus</span>
              </div>
            </NavLink>
          </li>
          <li className="p-2 w-full text-white">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) => {
                return isActive ? activeLink : normalLink;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>

              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-500">
                Dashboard
              </span>
            </NavLink>
          </li>
          <li className="p-2 w-full text-white">
            <NavLink
              to="/admin/profile"
              className={({ isActive }) => {
                return isActive ? activeLink : normalLink;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <span className="ml-2 hover:translate-x-1 transition-transform duration-500">
                Profile
              </span>
            </NavLink>
          </li>
          <li className="p-2 w-full text-white">
            <div
              onClick={handleLinkClick}
              className="flex items-center justify-between text-2xl p-3 cursor-pointer hover:transition hover:duration-300 hover:ease-in-out hover:bg-[#A34463] hover:rounded-lg hover:shadow-2xl"
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>

                <span className="ml-2 hover:translate-x-1 transition-transform duration-500">
                  Users
                </span>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
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
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <li className="p-2 ml-9 ">
                    <NavLink
                      to="/admin/user-teacher?manageOpen=true"
                      className={({ isActive }) => {
                        return isActive ? activeLink : normalLink;
                      }}
                    >
                      Alumni
                    </NavLink>
                  </li>
                  <li className="p-2 ml-9 ">
                    <NavLink
                      to="/admin/user-alumni?manageOpen=true"
                      className={({ isActive }) => {
                        return isActive ? activeLink : normalLink;
                      }}
                      // className="text-2xl"
                    >
                      Teachers
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <span className="ml-2 hover:translate-x-1 transition-transform duration-500">
                  Manage
                </span>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
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
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <li className="p-2 ml-9 ">
                    <NavLink
                      to="/admin/manage-events?manageOpen=true"
                      className={({ isActive }) => {
                        return isActive ? activeLink : normalLink;
                      }}
                    >
                      Events
                    </NavLink>
                  </li>
                  <li className="p-2 ml-9 ">
                    <NavLink
                      to="/admin/manage-notice?manageOpen=true"
                      className={({ isActive }) => {
                        return isActive ? activeLink : normalLink;
                      }}
                    >
                      Notice
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <span className="ml-2 hover:translate-x-1 transition-transform duration-500">
                Home
              </span>
            </NavLink>
          </li>
          <li className="p-2 w-full text-white">
            <NavLink to="/" onClick={handleLogout} className={normalLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>

              <span className="ml-2 hover:translate-x-1 transition-transform duration-500">
                Logout
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="ml-72 shadow-sm">
        <div className="flex justify-between items-center text-2xl p-5">
          <div className="ham">
            <RxHamburgerMenu />
          </div>
          <div className="opacity-60">Date:{formattedDate}</div>
          <div className="search-content">
            <form className="flex items-center">
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
            {/* <div className="mr-2"> */}
            <GoPerson />
            {/* </div> */}
            <div
              className="flex items-center cursor-pointer p-2 "
              onClick={() => setIsLogoutOpen(!isLogoutOpen)}
            >
              <p className=""> admin</p>
              <IoIosArrowDropdownCircle className="" />
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
                    {/* <FiLogOut /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                      />
                    </svg>

                    <span className="ml-2  group-hover:translate-x-1 transition-transfrom duration-500">
                      Logout
                    </span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
