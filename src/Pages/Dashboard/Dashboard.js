import { useState, useEffect } from "react";
import React from "react";
import Calendar from "react-calendar";
import DashboardContainer from "../../UI/Dashboard/DashboardContainer";
import DashBoardHeader from "../../UI/Dashboard/DashBoardHeader";
import "../../UI/Dashboard/calendar.css";

const Dashboard = () => {
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
      <DashBoardHeader />
      <DashboardContainer>
        <div className="grid grid-cols-3 gap-[5vh]">
          <div className="col-span-2 bg-[#A34463] p-10 rounded-lg shadow-md h-[30vh]">
            <div className="flex justify-between items-center">
              <div className="">
                <span className="text-4xl text-white tracking-wide font-light">
                  Welcome Admin
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="w-36 h-36 border border-white rounded-lg shadow-md flex flex-col items-center justify-center m-5 p-5">
                  <p className="text-4xl text-white tracking-wide">200</p>
                  <p className="text-2xl text-white tracking-wide">Views</p>
                </div>
                <div className="w-36 h-36 border border-white rounded-lg shadow-md flex flex-col items-center justify-center m-5 p-5">
                  <p className="text-4xl text-white tracking-wide">
                    {slides.length + 1}
                  </p>
                  <p className="text-2xl text-white tracking-wide">Events</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row-span-2 shadow-md rounded-lg h-[85vh]">
            <div className="w-full">
              <div className="p-10">
                <h1 className="text-3xl mb-10 opacity-65 tracking-wide">
                  Upcoming Events:
                </h1>
                <div className="overflow-y-auto h-[70vh]">
                  {slides &&
                    slides.map((slide) => (
                      <div className="mb-5" key={slide._id}>
                        <div className="border-l-4 border-primary">
                          <h3 className="text-2xl tracking-wide ml-3">
                            {slide.heading}
                          </h3>
                          <p className="opacity-60  text-xl font-light italic ml-3">
                            {slide.description}
                          </p>
                        </div>
                        <div className="flex justify-end p-4">
                          <div className="flex items center">
                            <span className="inline-block mr-1 opacity-60 font-light">
                              Event on:
                            </span>
                            <span className="inline-block opacity-60 font-light">
                              {`${new Date(slide.date).getDate()}/${
                                new Date(slide.date).getMonth() + 1
                              }/${new Date(slide.date).getFullYear()}`}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 w-full p-10 pt-20 pb-20 bg-white rounded-lg shadow-md h-[50vh]">
            <Calendar style={{ width: "100%" }} />
          </div>
        </div>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
