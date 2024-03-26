import heroImage from "../Assets/hero-image.jpg";
import { motion } from "framer-motion";

const firstVaraint = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const secondVaraint = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
};
const thirdVaraint = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
};
const fourthVaraint = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.4,
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  return (
    <div className="mt-[18vh] relative">
      <div
        className="bg-no-repeat bg-center bg-cover h-[85vh] z-10 relative after:absolute after:content[''] after:w-full after:h-full after:top-0 after:left-0 after:bg-black  after:opacity-70"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="z-20 absolute top-[15vh] left-20 p-20 flex flex-col items-start">
        <motion.span
          initial="initial"
          variants={firstVaraint}
          animate="animate"
          className="text-6xl mb-2 p-2 text-white block"
        >
          Welcome to
        </motion.span>
        <motion.span
          initial="initial"
          variants={secondVaraint}
          animate="animate"
          className="text-6xl mb-2 p-2 text-white block"
        >
          School of Technology
        </motion.span>
        <motion.span
          initial="initial"
          variants={thirdVaraint}
          animate="animate"
          className="text-3xl mb-5 p-2 text-white block"
        >
          We Prepare Students With Transformative Experience
        </motion.span>
        <motion.span
          initial="initial"
          variants={fourthVaraint}
          animate="animate"
          className="text-xl p-4 block bg-primary text-white cursor-pointer w-1/5 text-center "
        >
          Learn More
        </motion.span>
      </div>
    </div>
  );
};

export default HeroSection;
