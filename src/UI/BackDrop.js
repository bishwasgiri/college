import React from "react";
import Modal from "./Modal";
import "./backdrop.css";

const BackDrop = (props) => {
  return (
    <div className="backdrop">
      <Modal />
    </div>
  );
};

export default BackDrop;
