import courseone from "../Assets/course-one.jpg";
import coursetwo from "../Assets/course-two.jpg";
import coursethree from "../Assets/course-three.jpg";
import ContentHeader from "../UI/ContentHeader";
import { motion } from "framer-motion";

const slideAbove = {
  hidden: { opacity: 0, y: 50 },
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

const StudySection = () => {
  return (
    <>
      <ContentHeader heading={"Study at GMC"} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideAbove}
        viewport={{ once: true }}
        className="w-4/5 mx-auto mt-20 mb-40"
      >
        <p className="flex flex-col items-center">
          <span className="text-2xl m-1 p-1 opacity-60 font-light tracking-wide text-center">
            Whether you're considering foundation course or an undergraduate
            degree or master's,
          </span>
          <span className="text-2xl m-1 p-1 opacity-60 font-light tracking-wide text-center">
            GMC is a place where students thrive
          </span>
        </p>
        <div className=" grid  grid-cols-1 gap-10  lg:grid-cols-3">
          <div className="w-600 overflow-hidden relative group">
            <img
              className="w-full transition-transform duration-300 ease-in-out group-hover:scale-125 cursor-pointer"
              src={courseone}
              alt="course"
            />
            <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 bg-primary text-white  cursor-pointer p-4 tracking-wide ">
              High School
            </span>
          </div>
          <div className="w-600 overflow-hidden relative group">
            <img
              className="w-full transition-transform duration-300 ease-in-out group-hover:scale-125 cursor-pointer"
              src={coursetwo}
              alt="course"
            />
            <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 bg-primary text-white  cursor-pointer p-4 tracking-wide">
              Bachelor's
            </span>
          </div>
          <div className="w-600 overflow-hidden relative group">
            <img
              className="w-full transition-transform duration-300 ease-in-out group-hover:scale-125 cursor-pointer"
              src={coursethree}
              alt="course"
            />
            <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 bg-primary text-white  cursor-pointer p-4 tracking-wide">
              Master's
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default StudySection;
