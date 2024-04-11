import ContentHeader from "../UI/ContentHeader";
import Swiper from "./Swiper";
import { motion } from "framer-motion";

const slide = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: "tween",
      stiffness: 60,
      delay: 0.2,
      duration: 1,
      ease: "easeIn",
    },
  },
};

const UpcomingEvent = () => {
  const slides = [
    { key: "id1", content: "This is the first content" },
    { key: "id2", content: "This is the second content" },
    { key: "id3", content: "This is the third content" },
    { key: "id4", content: "This is the fourth content" },
    { key: "id5", content: "This is the fifth content" },
    { key: "id6", content: "This is the sixth content" },
  ];
  return (
    <>
      <ContentHeader heading={"Upcoming Events"} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slide}
        viewport={{ once: true }}
        className="w-4/5 mx-auto bg-secondary mt-20 mb-40"
      >
        <Swiper slides={slides} />
      </motion.div>
    </>
  );
};
export default UpcomingEvent;
