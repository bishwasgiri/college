import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiper.css";
import ContentHeader from "../UI/ContentHeader";

const Swipe = ({ slides }) => {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" }); // Get full month name
  const year = today.getFullYear(); // Get full year
  const day = today.getDate();

  return (
    <div className="swiper-wrapper">
      <Swiper
        // install Swiper modules
        // style={{ backgroundColor: "#f1f1f1" }}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={1}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.key}>
            <div className="swipe-content">
              <div className="all-events event-date">
                <div className="date-content">
                  <div className="day">
                    <p className="day-date">{day}</p>
                  </div>
                  <div className="month-year">
                    <p className="month">{month}</p>
                    <p className="year">{year}</p>
                  </div>
                </div>
              </div>
              <div className="all-events">
                <span className="event-heading">Arts and Culture</span>
              </div>
              <div className="all-events">
                <h3 className="event-desc">Dance Practise For Parents Day</h3>
              </div>
              <div className="all-events">
                <span>
                  <a href="#" className="event-detail">
                    Find out more
                  </a>
                </span>
              </div>
              {/* < */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipe;
