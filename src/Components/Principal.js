import React from "react";
import { motion } from "framer-motion";
import principal from "../Assets/prince.jpg";
import ContentHeader from "../UI/ContentHeader";

const leftVariant = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      delay: 0.2,
      duration: 1,
      ease: "easeIn",
    },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      delay: 0.3,
      duration: 1,
      ease: "easeIn",
    },
  },
};

const Principal = () => {
  return (
    <>
      <ContentHeader heading={"Principal Message"} />
      <div className="w-4/5 mx-auto m-40 flex items-center flex-col md:flex-row md:justify-between mt-20 mb-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={leftVariant}
          viewport={{ once: true }}
          className="md:flex-2"
        >
          <img className="w-full" src={principal} alt="principal" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={rightVariant}
          viewport={{ once: true }}
          className="p-10 md:flex-3"
        >
          <span className="inline-block text-2xl p-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            non expedita beatae aperiam, labore magni dignissimos molestiae
            consequuntur quaerat deleniti omnis amet perspiciatis, tenetur
            dolorum? Esse provident harum ad? Officia laboriosam, nam tempore
            eius voluptatem ipsum ullam distinctio dolor pariatur deleniti
            laborum enim, accusamus hic consequatur voluptatibus totam aut amet
            neque iste
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default Principal;
