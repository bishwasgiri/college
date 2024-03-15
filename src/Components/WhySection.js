import { useEffect, useState, useRef } from "react";

import { FaBuildingColumns } from "react-icons/fa6";
import { LiaAwardSolid } from "react-icons/lia";
import { IoBookSharp } from "react-icons/io5";
import ContentHeader from "../UI/ContentHeader";
import "./why-section.css";

const WhySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const animateRef = useRef(null);

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
      { threshold: 0.5 }
    ); // Trigger when 50% of the element is visible

    if (animateRef.current) {
      observer.observe(animateRef.current);
    }

    return () => {
      if (animateRef.current) {
        observer.unobserve(animateRef.current);
      }
    };
  }, []);

  return (
    <div className="why-wrapper" ref={animateRef}>
      <ContentHeader heading={"Why Choose SOT"} />
      <div className={`card-container ${isVisible ? "animate" : ""}`}>
        <div className="card">
          <LiaAwardSolid style={{ fontSize: "7rem" }} />
          <h3 className="cardContent-title">Affordability</h3>
          <p className="cardContent">
            Our college is government run college that makes us affordable for
            every family throught country
          </p>

          <span className="cardContent-btn">Learn More</span>
        </div>
        <div className="card">
          <FaBuildingColumns style={{ fontSize: "7rem" }} />
          <h3 className="cardContent-title">Academics</h3>
          <p className="cardContent">
            Our college is government run college that makes us affordable for
            every family throught country
          </p>

          <span className="cardContent-btn">Learn More</span>
        </div>
        <div className="card">
          <IoBookSharp style={{ fontSize: "7rem" }} />
          <h3 className="cardContent-title">Inspiring Student Life</h3>
          <p className="cardContent">
            Our college is government run college that makes us affordable for
            every family throught country
          </p>

          <span className="cardContent-btn">Learn More</span>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
