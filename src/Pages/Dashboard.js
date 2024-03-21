import React from "react";
import Calendar from "react-calendar";
import DashboardContainer from "../UI/DashboardContainer";
import DashBoardHeader from "../UI/DashBoardHeader";
import "./dashboard.css";
import "../UI/calendar.css";
const Dashboard = () => {
  return (
    <>
      <DashBoardHeader />
      <DashboardContainer>
        <div className="main-dashboard">
          <div className="mainDash-wrapper">
            <div className="dash-card blue">
              <p className="short-num">1000</p>
              <p className="short-desc">Alumni</p>
            </div>
            <div className="dash-card red">
              <p className="short-num">30</p>
              <p className="short-desc">Teachers</p>
            </div>
            <div className="dash-card yellow">
              <p className="short-num">200</p>
              <p className="short-desc">Views</p>
            </div>
            <div className="dash-card pink">
              <p className="short-num">83</p>
              <p className="short-desc">Events</p>
            </div>
          </div>
          <div className="calendar-container">
            <div className="upcoming-events">
              <div className="event-group">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  mollitia earum magnam, delectus maiores ipsum deserunt
                  quibusdam ut? Quod nemo nobis quia odit voluptas obcaecati
                  perferendis earum est aperiam ut.
                </p>
                <p>Date</p>
              </div>
              <div className="event-group">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  mollitia earum magnam, delectus maiores ipsum deserunt
                  quibusdam ut? Quod nemo nobis quia odit voluptas obcaecati
                  perferendis earum est aperiam ut.
                </p>
                <p>Date</p>
              </div>
              <div className="event-group">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  mollitia earum magnam, delectus maiores ipsum deserunt
                  quibusdam ut? Quod nemo nobis quia odit voluptas obcaecati
                  perferendis earum est aperiam ut.
                </p>
                <p>Date</p>
              </div>
              <div className="event-group">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  mollitia earum magnam, delectus maiores ipsum deserunt
                  quibusdam ut? Quod nemo nobis quia odit voluptas obcaecati
                  perferendis earum est aperiam ut.
                </p>
                <p>Date</p>
              </div>
            </div>
            <div className="calendar-wrapper">
              <Calendar style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
