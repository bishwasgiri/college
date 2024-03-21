import React from "react";
import DashboardContent from "../Pages/Dashboard";
import { IoHomeOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
// import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import "./dashboardHeader.css";

const DashBoardHeader = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  return (
    <div className="dashboard-container">
      <div className="vertical-nav">
        <ul>
          <li>
            <a href="">SOT</a>
          </li>
          <li>
            {/* <a href=""> */}
            <Link to="/admin/dashboard">
              <IoHomeOutline />
              <span className="vert-names">Dashboard</span>
            </Link>
            {/* </a> */}
          </li>
          <li>
            <Link to="/admin/profile">
              <RxAvatar />
              <span className="vert-names">Profile</span>
            </Link>
          </li>
          <li>
            <a href="">
              <IoPersonAddOutline />
              <span className="vert-names">Create User</span>
            </a>
          </li>
          <li>
            <a href="">
              <MdEventAvailable />
              <span className="vert-names"> Manage Events</span>
            </a>
          </li>
          <li>
            <a href="">
              <FaRegNewspaper />
              <span className="vert-names"> Publish Notice</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="horizontal-container">
        <div className="horizontal-header">
          <div className="ham">
            <RxHamburgerMenu />
          </div>
          {/* <div className="left-content"> */}
          <div className="date">Date:{formattedDate}</div>
          {/* </div> */}
          <div className="search-content">
            <form className="search-form">
              <div className="search">
                <CiSearch />
              </div>
              <div className="search-input">
                <input type="text" placeholder="Search Here..." />
              </div>
            </form>
          </div>
          <div className="right-content">
            <div className="admin-logo">
              <GoPerson />
            </div>
            <div className="admin-grp">
              <p className="admin-name"> admin</p>

              {/* <MdKeyboardArrowRight /> */}
              <IoIosArrowDropdownCircle className="down-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
