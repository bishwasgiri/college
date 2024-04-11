import React, { useContext } from "react";
import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import AuthContext from "../../Store/Auth-context";

const DashBoardHeader = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  const handleClick = () => {
    console.log("clicked");
    setIsClicked(true);
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
    <div className="dashboard-container">
      <div className="">
        <ul className="h-full fixed top-0 left-0 z-40 p-5 border-2 border-red-700">
          <li className="p-2 mb-12">
            <Link className=" text-3xl p-2" href="">
              SOT
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/admin/dashboard"
              className="flex items-center text-2xl hover:bg-primary hover:text-white p-2"
            >
              <IoHomeOutline />
              <span className="ml-1 opacity-60">Dashboard</span>
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/admin/profile"
              className="flex items-center text-2xl hover:bg-primary hover:text-white p-2"
            >
              <RxAvatar />
              <span className="ml-1 opacity-60">Profile</span>
            </Link>
          </li>
          <li className="p-2">
            <Link
              to=""
              className="flex items-center text-2xl hover:bg-primary hover:text-white p-2"
            >
              <IoPersonAddOutline />
              <span className="ml-1 opacity-60">Create User</span>
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/staff/manage-events"
              className="flex items-center text-2xl hover:bg-primary hover:text-white p-2"
            >
              <MdEventAvailable />
              <span className="ml-1 opacity-60"> Manage Events</span>
            </Link>
          </li>
          <li className="p-2">
            <Link
              to=""
              className="flex items-center text-2xl hover:bg-primary hover:text-white p-2"
            >
              <FaRegNewspaper />
              <span className="ml-1 opacity-60"> Publish Notice</span>
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/"
              className="flex items-center text-2xl hover:bg-primary hover:text-white p-2"
            >
              <IoHomeOutline />
              <span className="ml-1 opacity-60">Website Home</span>
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/"
              onClick={handleLogout}
              className="flex items-center text-2xl hover:bg-primary hover:text-white p-2"
            >
              <FiLogOut />
              <span className="ml-1 opacity-60">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="ml-72 p-1">
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
          <div className="flex items-center bg-primary text-white p-2 relative">
            <div className="mr-2">
              <GoPerson />
            </div>
            <div
              className="flex items-center cursor-pointer p-2"
              onClick={handleClick}
            >
              <p className="opacity-60"> admin</p>
              <IoIosArrowDropdownCircle className="opacity-60" />
            </div>
            {isClicked && (
              <Link
                to="/"
                className="absolute right-0 top-16 w-full mt-1 text-primary text-xl p-3 cursor-pointer shadow-md flex  justify-center items-center"
              >
                <FiLogOut />
                <span className="ml-2">Logout</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
