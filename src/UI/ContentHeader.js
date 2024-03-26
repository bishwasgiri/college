import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    type: "tween",
    transition: {
      delay: 0.2,
      duration: 1,
      ease: "easeIn",
    },
  },
};

const ContentHeader = (props) => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUp}
        viewport={{ once: true }}
        className="w-4/5 mx-auto flex flex-col items-center mt-40"
      >
        <h1 className="text-3xl text-primary">{props.heading}</h1>
        <div className="mt-2 h-1 w-10 bg-primary"></div>
      </motion.div>
    </>
  );
};

export default ContentHeader;
