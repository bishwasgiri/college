import ContentHeader from "../UI/ContentHeader";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Swipe from "./Swiper";

const slide = {
  hidden: { opacity: 0, y: 50 },
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

const UpcomingEvent = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://college-backend-pxbb.onrender.com/api/event/events",
          {
            method: "GET",

            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.log("error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [slides]);

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
        <Swipe slides={slides} />
      </motion.div>
    </>
  );
};
export default UpcomingEvent;
