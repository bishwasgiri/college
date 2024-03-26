import courseone from "../Assets/course-one.jpg";
import coursetwo from "../Assets/course-two.jpg";
import coursethree from "../Assets/course-three.jpg";
import ContentHeader from "../UI/ContentHeader";
import { motion } from "framer-motion";

const slideAbove = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    type: "tween",
    transition: {
      delay: 0.4,
      duration: 1,
      ease: "easeIn",
    },
  },
};

const StudySection = () => {
  return (
    <>
      <ContentHeader heading={"Study at SOT"} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideAbove}
        viewport={{ once: true }}
        className="w-4/5 mx-auto mt-20 mb-40"
      >
        <p className="flex flex-col items-center">
          <span className="text-2xl m-1 p-1 opacity-60">
            Whether you're considering foundation course or an undergraduate
            degree or master's,
          </span>
          <span className="text-2xl m-1 p-1 opacity-60">
            SOT is a place where students thrive
          </span>
        </p>
        <div className=" grid  grid-cols-1 gap-10 m-10  md:grid-cols-2 lg:grid-cols-3">
          <div className="w-600 overflow-hidden relative group">
            <img
              className="w-full transition-transform duration-200 ease-in-out group-hover:scale-125 cursor-pointer"
              src={courseone}
              alt="course"
              loading="lazy"
            />
            <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 bg-primary text-white  cursor-pointer p-3">
              High School
            </span>
          </div>
          <div className="w-600 overflow-hidden relative group">
            <img
              className="w-full transition-transform duration-200 ease-in-out group-hover:scale-125 cursor-pointer"
              src={coursetwo}
              alt="course"
              loading="lazy"
            />
            <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 bg-primary text-white  cursor-pointer p-3">
              Bachelor's
            </span>
          </div>
          <div className="w-[600] overflow-hidden relative group">
            <img
              className="w-full transition-transform duration-200 ease-in-out group-hover:scale-125 cursor-pointer"
              src={coursethree}
              alt="course"
              loading="lazy"
            />
            <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 bg-primary text-white  cursor-pointer p-3">
              Master's
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default StudySection;
