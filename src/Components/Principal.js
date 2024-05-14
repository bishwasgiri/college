import React from "react";
import { motion } from "framer-motion";
import principal from "../Assets/principal.jpg";
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
      delay: 0.4,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Principal = () => {
  return (
    <>
      <ContentHeader heading={"Principal Message"} />
      <div className="w-4/5 mx-auto mt-20 mb-40 flex items-center flex-col lg:flex-row-reverse lg:justify-between">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={leftVariant}
          viewport={{ once: true }}
          className="flex-1 h-[70vh] overflow-hidden "
        >
          <img
            className="w-full h-full object-cover object-top"
            src={principal}
            alt="principal"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={rightVariant}
          viewport={{ once: true }}
          className="p-10 lg:flex-1"
        >
          <blockquote className="up-quote text-2xl p-3 opacity-60 text-justify leading-10 italic font-light tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            non expedita beatae aperiam, labore magni dignissimos molestiae
            consequuntur quaerat deleniti omnis amet perspiciatis, tenetur
            dolorum? Esse provident harum ad? Officia laboriosam, nam tempore
            eius voluptatem ipsum ullam distinctio dolor pariatur deleniti
            laborum enim, accusamus hic consequatur voluptatibus totam aut amet
            neque iste
          </blockquote>
          <span className="text-2xl opacity-60 text-primary p-3 block text-end">
            Shanta K.C
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default Principal;
