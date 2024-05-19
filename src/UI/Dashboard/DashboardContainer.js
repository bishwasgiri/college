import React from "react";
// import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DashboardContainer = ({ isHamClicked, children }) => {
  return (
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
      className="p-6"
      // className={!props.isHamClicked ? "ml-72 p-6" : "ml-[124px] p-6"}
    >
      {children}
    </motion.div>
  );
};

export default DashboardContainer;
