import React from "react";
import Calendar from "react-calendar";
import DashboardContainer from "../../UI/Dashboard/DashboardContainer";
import DashBoardHeader from "../../UI/Dashboard/DashBoardHeader";
// import "./dashboard.css";
import "../../UI/Dashboard/calendar.css";

const Dashboard = () => {
  const currentDate = new Date();
  const eventDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  return (
    <>
      <DashBoardHeader />
      <DashboardContainer>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-4 gap-12">
            <div className="p-10 m-10 bg-gradient-to-b from-red-900 rounded-lg flex flex-col items-center text-gray-100">
              <p className="text-4xl">1000</p>
              <p className="text-2xl">Alumni</p>
            </div>
            <div className="p-10 m-10 bg-gradient-to-b from-cyan-900 flex flex-col items-center text-gray-100">
              <p className="text-4xl">30</p>
              <p className="text-2xl">Teachers</p>
            </div>
            <div className="p-10 m-10 bg-gradient-to-b from-neutral-900 flex flex-col items-center text-gray-100">
              <p className="text-4xl">200</p>
              <p className="text-2xl">Views</p>
            </div>
            <div className="p-10 m-10 bg-gradient-to-b from-orange-900  flex flex-col items-center text-gray-100">
              <p className="text-4xl">83</p>
              <p className="text-2xl">Events</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12 bg-secondary m-10 p-10">
            <div className=" m-10 p-10 ">
              <h1 className="text-4xl mb-5 opacity-70">Upcoming Events:</h1>
              <div className="overflow-y-auto h-80">
                <div className="mb-5">
                  <p className="border-l-4 border-primary p-4 opacity-60">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                    mollitia earum magnam, delectus maiores ipsum deserunt
                    quibusdam ut? Quod nemo nobis quia odit voluptas obcaecati
                    perferendis earum est aperiam ut.
                  </p>
                  <div className="flex justify-end p-4">
                    <div className="flex items center p-4">
                      <span className="inline-block mr-1 opacity-50">
                        Event on:
                      </span>
                      <span className="inline-block opacity-50">
                        {eventDate}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="border-l-4 border-primary p-4 opacity-60">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                    mollitia earum magnam, delectus maiores ipsum deserunt
                    quibusdam ut? Quod nemo nobis quia odit voluptas obcaecati
                    perferendis earum est aperiam ut.
                  </p>
                  <div className="flex justify-end p-4">
                    <div className="flex items center">
                      <span className="inline-block mr-1 opacity-50">
                        Event on:
                      </span>
                      <span className="inline-block opacity-50">
                        {eventDate}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="border-l-4 border-primary p-4 opacity-60">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                    mollitia earum magnam, delectus maiores ipsum deserunt
                    quibusdam ut? Quod nemo nobis quia odit voluptas obcaecati
                    perferendis earum est aperiam ut.
                  </p>
                  <div className="flex justify-end p-4">
                    <div className="flex items center">
                      <span className="inline-block mr-1 opacity-50">
                        Event on:
                      </span>
                      <span className="inline-block opacity-50">
                        {eventDate}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="border-l-4 border-primary p-4 opacity-60">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                    mollitia earum magnam, delectus maiores ipsum deserunt
                    quibusdam ut? Quod nemo nobis quia odit voluptas obcaecati
                    perferendis earum est aperiam ut.
                  </p>
                  <div className="flex justify-end p-4">
                    <div className="flex items center">
                      <span className="inline-block mr-1 opacity-50">
                        Event on:
                      </span>
                      <span className="inline-block opacity-50">
                        {eventDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center m-10 p-20">
              <Calendar style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
