import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: "tween",
      delay: 0.2,
      duration: 0.4,
      ease: "easeInOut",
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
        <h1 className="text-3xl text-primary tracking-wide">{props.heading}</h1>
        <div className="mt-2 h-1 w-10 bg-primary"></div>
      </motion.div>
    </>
  );
};

export default ContentHeader;
