import { useEffect, useState, useRef } from "react";
import { FiBookOpen } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { BsAward } from "react-icons/bs";
import Card from "../UI/Card";
import ContentHeader from "../UI/ContentHeader";
import { motion } from "framer-motion";

const slideBottom300 = {
  hidden: {
    opacity: 0,
    y: "10px",
  },
  visible: {
    opacity: 1,
    y: "0",
    transition: {
      type: "spring", // Transition type
      stiffness: 60,
      delay: 0.2,
      duration: 2,
      ease: "easeIn",
    },
  },
};

const slideBottom500 = {
  hidden: {
    opacity: 0,
    y: "10px",
  },
  visible: {
    opacity: 1,
    y: "0",
    transition: {
      type: "spring", // Transition type
      stiffness: 60,
      delay: 0.6,
      duration: 2,
      ease: "easeIn",
    },
  },
};

const slideBottom700 = {
  hidden: {
    opacity: 0,
    y: "10px",
  },
  visible: {
    opacity: 1,
    y: "0",
    transition: {
      type: "spring", // Transition type
      stiffness: 60,
      delay: 1,
      duration: 2,
      ease: "easeIn",
    },
  },
};

const WhySection = () => {
  return (
    <>
      <ContentHeader heading={"Why Choose GMC"} />
      <div className="w-full md:w-4/5 mx-auto grid grid-cols-1  gap-5  lg:grid-cols-3 mt-20 mb-40 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideBottom300}
          viewport={{ once: true }}
        >
          <Card>
            <BsAward size={60} className="text-primary" />
            <h3 className="p-5 text-3xl tracking-wider font-light">
              Affordability
            </h3>
            <p className="text-center text-2xl opacity-60 tracking-wider font-light">
              Our college is government run college that makes us affordable for
              every family throught country
            </p>
            <span className="mt-5 text-xl bg-primary text-white p-4 tracking-wider">
              Learn More
            </span>
          </Card>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideBottom500}
          viewport={{ once: true }}
        >
          <Card>
            <FaRegBuilding size={60} className="text-primary" />
            <h3 className="p-5 text-3xl tracking-wider font-light">
              Academics
            </h3>
            <p className="text-center text-2xl opacity-60 tracking-wider font-light">
              Our college is government run college that makes us affordable for
              every family throught country
            </p>
            <span className="mt-5 text-xl bg-primary text-white p-4 tracking-wider">
              Learn More
            </span>
          </Card>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideBottom700}
          viewport={{ once: true }}
        >
          <Card>
            <FiBookOpen size={60} className="text-primary" />
            <h3 className="p-5 text-3xl tracking-wider font-light">
              Inspiring Student Life
            </h3>
            <p className="text-center text-2xl opacity-60 tracking-wider font-light">
              Our college is government run college that makes us affordable for
              every family throught country
            </p>

            <span className="mt-5 text-xl bg-primary text-white p-4 tracking wider">
              Learn More
            </span>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default WhySection;
