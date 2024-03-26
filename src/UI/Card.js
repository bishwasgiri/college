import React from "react";

const Card = (props) => {
  return (
    <div
      style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
      className=" flex flex-col items-center p-10 border-md cursor-pointer m-4"
    >
      {props.children}
    </div>
  );
};

export default Card;
