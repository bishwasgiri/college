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
  const [isLoading, setIsLoading] = useState(false);

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
        if (response.ok) {
          const data = await response.json();
          // console.log("the data after response is ", data);

          if (data) {
            setSlides(data);
            setIsLoading(true);
          } else {
            setIsLoading(false);
          }
        }
        if (!response.ok) {
          setIsLoading(true);
        }
      } catch (error) {
        console.log("error fetching posts:", error);
        setIsLoading(true);
      }
    };

    fetchPosts();
  }, [slides]);

  return (
    <>
      <ContentHeader heading={"Upcoming Events"} />
      {isLoading ? (
        <div className="w-4/5 mx-auto flex flex-col items-center mt-5">
          <svg
            className="animate-spin"
            fill="none"
            height="48"
            viewBox="0 0 48 48"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4"
              stroke="#641320"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
          </svg>
        </div>
      ) : (
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slide}
          viewport={{ once: true }}
          className="w-4/5 mx-auto bg-secondary mt-20 mb-40"
        >
          <Swipe slides={slides} />
        </motion.div>
      )}
    </>
  );
};
export default UpcomingEvent;
