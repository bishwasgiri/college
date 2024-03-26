import React from "react";
import Modal from "./Modal";
// import "./backdrop.css";

const BackDrop = (props) => {
  return (
    <div className="h-[100vh] w-full bg-black opacity-[.92] fixed top-0 left-0 flex flex-col justify-center items-center">
      <Modal />
    </div>
  );
};

export default BackDrop;
