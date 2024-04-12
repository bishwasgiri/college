import React from "react";
import { motion } from "framer-motion";
import principal from "../Assets/chairman.jpg";
import ContentHeader from "../UI/ContentHeader";
import "./principal.css";

const leftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      delay: 0.4,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      delay: 0.2,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Chairman = () => {
  return (
    <>
      <ContentHeader heading={"Chairman Message"} />
      <div className="w-4/5 mx-auto mt-20 mb-40 flex  items-center flex-col md:flex-row md:justify-between ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={leftVariant}
          viewport={{ once: true }}
          // className=""
          className="md:flex-3 h-[70vh] overflow-hidden "
        >
          <img
            className="w-full h-auto object-cover"
            src={principal}
            alt="principal"
            // loading="lazy"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={rightVariant}
          viewport={{ once: true }}
          className="p-10 md:flex-1"
        >
          <blockquote className="up-quote inline-block text-2xl p-3 text-justify opacity-60 leading-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            non expedita beatae aperiam, labore magni dignissimos molestiae
            consequuntur quaerat deleniti omnis amet perspiciatis, tenetur
            dolorum? Esse provident harum ad? Officia laboriosam, nam tempore
            eius voluptatem ipsum ullam distinctio dolor pariatur deleniti
            laborum enim, accusamus hic consequatur voluptatibus totam aut amet
            neque iste
          </blockquote>
          <span className="text-2xl opacity-60 text-primary p-3 block text-end">
            Amrit Raut
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default Chairman;
