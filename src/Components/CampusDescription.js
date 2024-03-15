import { useEffect, useState, useRef } from "react";
import "./campus-description.css";
import CountUp from "react-countup";
// import UpcomingEvent from "./UpcomingEvent";
import ContentHeader from "../UI/ContentHeader";

const CampusDescription = () => {
  const [isVisible, setIsVisible] = useState(false);
  const countUpRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  return (
    <div className="campus-wrapper">
      <div className="campus-desc">
        <ContentHeader heading={"School of Technology"} />
        <p className="campus-info">
          <span className="campus-desc1">
            School of Technology prepares students with the transformative
            experince and to be well-rounded leaders{" "}
          </span>
          <span className="campus-desc2">
            who make a positive impact on the world
          </span>
        </p>
        <div className="numbers" ref={countUpRef}>
          <div className="numbers-content">
            {/* <span className="num">{count}+</span> */}
            {isVisible && <CountUp end={1000} duration={2} className="num" />}
            {/* <span>+</span> */}
            <span className="num-desc">Alumni</span>
          </div>
          <div className="numbers-content">
            {/* <span className="num">500+</span> */}
            {isVisible && <CountUp end={500} duration={2} className="num" />}
            {/* <CountUp end={500} duration={3} className="num" /> */}
            <span className="num-desc">Students</span>
          </div>
          <div className="numbers-content">
            {isVisible && <CountUp end={10} duration={5} className="num" />}
            {/* <CountUp end={10} duration={3} className="num" /> */}
            <span className="num-desc">Majors</span>
          </div>
        </div>
      </div>
      {/* <UpcomingEvent /> */}
    </div>
  );
};

export default CampusDescription;
