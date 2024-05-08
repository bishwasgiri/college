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
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._id}>
            <div className="swipe-content">
              <div className="all-events event-date">
                <div className="bg-secondary p-4 flex items-center">
                  <div className="day">
                    <p className="text-primary text-5xl">
                      {new Date(slide.date).getDate()}
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-3">
                    <p className="text-primary text-3xl tracking-wide">
                      {new Date(slide.date).toLocaleString("default", {
                        month: "long",
                      })}
                    </p>
                    <p className="text-primary text-2xl tracking-wide">
                      {new Date(slide.date).getFullYear()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="all-events">
                <span className="opacity-60 text-2xl tracking-wide">
                  {slide.heading}
                </span>
              </div>
              <div className="all-events">
                <h3 className="opacity-60 text-xl italic tracking-wide">
                  {slide.description}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipe;
