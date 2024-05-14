import { useRef } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import backOne from "../Assets/back.jpg";
import backTwo from "../Assets/back-two.jpg";
import backThree from "../Assets/back-three.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./hero-section.css";

const firstVaraint = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const secondVaraint = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.8,
      type: "tween",
      ease: "easeInOut",
    },
  },
};
const thirdVaraint = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 0.8,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const fourthVaraint = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.4,
      duration: 0.8,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="mt-[18vh] w-full h-[82vh] relative">
      <div className="bg-black w-full h-full absolute top-0 left-0 opacity-60 z-10"></div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <img
            src={backOne}
            alt="background"
            className="w-full h-full object-cover absolute top-0 left-0 "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={backTwo}
            alt="background"
            className="w-full h-full object-cover object-bottom absolute top-0 left-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={backThree}
            alt="background"
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <div className="absolute px-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center lg:items-start space-y-4  font-normal tracking-wider lg:tracking-wide lg:left-0 lg:translate-x-0 lg:px-48 ">
        <motion.span
          initial="initial"
          variants={firstVaraint}
          animate="animate"
          className="text-3xl lg:text-5xl font-light text-white block"
        >
          Welcome to
        </motion.span>
        <motion.span
          initial="initial"
          variants={secondVaraint}
          animate="animate"
          className="text-5xl lg:text-7xl  text-white block text-center lg:text-start"
        >
          Gaurishankar Multiple Campus
        </motion.span>
        <motion.span
          initial="initial"
          variants={thirdVaraint}
          animate="animate"
          className="text-3xl lg:text-4xl font-light text-white block text-center lg:text-start"
        >
          We Prepare Students With Transformative Experience
        </motion.span>
        <motion.span
          initial="initial"
          variants={fourthVaraint}
          animate="animate"
          className="text-xl p-5  bg-primary text-white cursor-pointer"
        >
          Learn More
        </motion.span>
      </div>
    </div>
  );
};

export default HeroSection;
