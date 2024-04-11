import React from "react";
import { useState } from "react";
import DashBoardHeader from "../../UI/Dashboard/DashBoardHeader";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManageEvents = () => {
  const [date, setDate] = useState(null);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([
    // { date: "", heading: "", description: "" },
  ]);

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleHeading = (e) => {
    setHeading(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("submit cliked");
    e.preventDefault();
    console.log(date, heading, description);
    const data = {
      date: date,
      heading: heading,
      description: description,
    };
    console.log(data, typeof data);

    setPosts([...posts, data]);
  };

  return (
    <>
      <DashBoardHeader />
      <div className="ml-[300px] p-3">
        <h1 className=" text-3xl opacity-65 text-center m-3">Create Events</h1>
        <div className="grid grid-cols-2 gap-5 border-2 border-red-700 p-3">
          {/* create form */}
          <form
            action=""
            className="w-3/5 mx-auto mt-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-start mb-5">
              <label htmlFor="event" className="mb-2 text-2xl">
                Pick a Date:
              </label>

              <input
                type="date"
                id="date"
                className="outline-none border-2 border-primary p-2 w-full"
                onChange={handleDate}
              />
            </div>
            <div className="flex flex-col items-start mb-5">
              <label htmlFor="event" className="mb-2 text-2xl">
                Event Heading:
              </label>
              <input
                type="text"
                id="event"
                className="outline-none border-2 border-primary p-2 w-full"
                onChange={handleHeading}
              />
            </div>
            <div>
              <label htmlFor="description" className="mb-2 text-2xl">
                Add Description:
              </label>
              <textarea
                name=""
                id=""
                cols="20"
                rows="5"
                className=" outline-none border-2 border-primary p-2 w-full block"
                onChange={handleDescription}
              ></textarea>
            </div>

            <div className="flex flex-col items-start">
              <button
                className="bg-primary text-white p-3 mt-10 cursor-pointer text-xl"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
          {/* post event */}
          <div className="post">
            <h1 className="mt-10 text-2xl p-2">Post OverView:</h1>

            <div className="h-80 overflow-y-auto  mr-4 border-2 border-red-500 w-full p-5">
              {posts
                ? posts.map((post, index) => (
                    <div key={index} className="m-2 p-2 relative ">
                      <div className="p-2 relative border-2">
                        <div className="text-xl">Date: {post.date}</div>
                        <div className="text-xl">Heading: {post.heading}</div>
                        <div className="text-xl">
                          Description: {post.description}
                        </div>
                        <div className=" flex absolute top-0 right-2">
                          <FiEdit className="p-1 m-1 text-3xl cursor-pointer" />
                          <RiDeleteBin6Line className="p-1 m-1 text-3xl cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageEvents;
