import React from "react";
import ContentHeader from "../../UI/ContentHeader";
import Card from "../../UI/Card";
import avatar from "../../Assets/avatar.jpg";
import { motion } from "framer-motion";

const firstVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      delay: 0.2,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const secondVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      delay: 0.4,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
const thirdVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      delay: 0.6,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const leftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      delay: 0.8,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Testimonials = () => {
  return (
    <>
      <ContentHeader heading={"Testimonials"} />
      <div className="w-full p-2 md:w-4/5 mx-auto mt-20 mb-40">
        <div className="flex flex-col items-center lg:flex-row lg:space-x-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={leftVariant}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4  lg:items-start md:space-y-8"
          >
            <span className="flex flex-col items-center md:items-start font-medium ">
              <span className="text-4xl text-primary block text-center lg:text-start">
                Read what our students
              </span>
              <span className="text-4xl text-primary block">Say about us</span>
            </span>
            <span className="text-2xl opacity-65 font-light block">
              We have over 1000+ alumni
            </span>
            <span className="text-2xl opacity-65 font-light block text-center lg:text-start">
              They are working on various prestigious organization
            </span>
          </motion.div>

          <div className="flex flex-col items-end justify-center w-ful">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={firstVariant}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between lg:flex-row space-x-4 rounded shadow-xl p-10"
            >
              <div className="w-20 h-20">
                <img
                  src={avatar}
                  alt="avatar"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col items-end">
                <div className="flex space-x-2">
                  <span className="text-5xl text-primary font-light">“</span>
                  <p className="text-xl italic font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, fugiat.
                  </p>
                </div>
                <span className="opacity-65">Andrew</span>
                <span className="opacity-65">CEO, Nepal Bank</span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={secondVariant}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between lg:flex-row space-x-4 rounded shadow-xl p-10"
            >
              <div className="w-20 h-20">
                <img
                  src={avatar}
                  alt="avatar"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col items-end">
                <div className="flex space-x-2">
                  <span className="text-5xl text-primary font-light">“</span>
                  <p className="text-xl italic font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, fugiat.
                  </p>
                </div>
                <span className="opacity-65">Andrew</span>
                <span className="opacity-65">CEO, Nepal Bank</span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={thirdVariant}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between lg:flex-row space-x-4 rounded shadow-xl p-10"
            >
              <div className="w-20 h-20">
                <img
                  src={avatar}
                  alt="avatar"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col items-end">
                <div className="flex space-x-2">
                  <span className="text-5xl text-primary font-light">“</span>
                  <p className="text-xl italic font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, fugiat.
                  </p>
                </div>
                <span className="opacity-65">Andrew</span>
                <span className="opacity-65">CEO, Nepal Bank</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
