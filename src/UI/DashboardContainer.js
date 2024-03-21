import React from "react";
import "./dashBoardContainer.css";
const DashboardContainer = (props) => {
  return <div className="dash-wrapper">{props.children}</div>;
};

export default DashboardContainer;
