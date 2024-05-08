import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
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
    <>
      <ContentHeader heading={"GMC School"} />
      <div className="w-4/5 mx-auto bg-secondary mt-20 mb-40 p-20">
        <div className="flex flex-col items-center">
          <p className="flex flex-col items-center">
            <span className="text-2xl inline-block m-1 p-1 opacity-60 font-light tracking-wide text-center">
              Gaurishankar Multiple Campus prepares students with the
              transformative experince and to be well-rounded leaders who make a
              positive impact on the world
            </span>
          </p>
          <div className="flex m-1 p-1" ref={countUpRef}>
            <div className=" flex flex-col items-center m-3 p-3 text-primary  text-4xl">
              {isVisible && <CountUp end={1000} duration={2} />}

              <span className="text-3xl font-light">Alumni</span>
            </div>
            <div className=" flex flex-col  items-center m-3 p-3 text-primary  bg-seondary text-4xl">
              {isVisible && <CountUp end={500} duration={2} />}
              <span className="text-3xl font-light">Students</span>
            </div>
            <div className=" flex flex-col  items-center m-3 p-3 text-primary  bg-seondary text-4xl">
              {isVisible && <CountUp end={10} duration={5} />}
              <span className="text-3xl font-light">Majors</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampusDescription;
