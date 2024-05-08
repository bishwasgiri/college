import React, { useEffect } from "react";
import { useState } from "react";
import DashBoardHeader from "../../UI/Dashboard/DashBoardHeader";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Card from "../../UI/Card";

const ManageEvents = () => {
  const [date, setDate] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  const [editIsClicked, setEditIsClicked] = useState(false);
  const [id, setId] = useState("");

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
        setPosts(data);
      } catch (error) {
        console.log("error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [posts]);

  useEffect(() => {
    if (editIsClicked) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://college-backend-pxbb.onrender.com/api/event/a-event/${id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          const isoDate = new Date(data.date);
          const year = isoDate.getFullYear();
          const month = String(isoDate.getMonth() + 1).padStart(2, "0");
          const day = String(isoDate.getDate()).padStart(2, "0");
          const formattedDate = `${year}-${month}-${day}`;
          setDate(formattedDate);
          setHeading(data.heading);
          setDescription(data.description);
        } catch (error) {
          console.log("error fetching posts:", error);
        }
      };

      fetchData();
    }
  }, [editIsClicked, id]);

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleHeading = (e) => {
    setHeading(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleClear = () => {
    setDate("");
    setDescription("");
    setHeading("");
    setEditIsClicked(false);
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    const data = {
      date: date,
      heading: heading,
      description: description,
    };

    const response = await fetch(
      "https://college-backend-pxbb.onrender.com/api/event/create-event",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    if (response.ok) {
      setMessage(json.msg);
      setDate("");
      setDescription("");
      setHeading("");
    }

    if (!response.ok) {
      console.log("error  getting response ");
      setMessage(json.msg);
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(
      `https://college-backend-pxbb.onrender.com/api/event/delete-event/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setMessage(data.error);
    }
    if (response.ok) {
      setMessage(data.msg);
    }
  };

  const editHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://college-backend-pxbb.onrender.com/api/event/update/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ date, heading, description }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    if (response.ok) {
      console.log(json.msg);
      setMessage(json.msg);
      setDate("");
      setDescription("");
      setHeading("");
      setEditIsClicked(false);
    }

    if (!response.ok) {
      setMessage(json.msg);
    }
  };

  const handleEdit = async (id) => {
    setEditIsClicked(true);
    setId(id);
  };

  return (
    <>
      <DashBoardHeader />
      <div className="ml-[300px] p-3">
        <h1 className=" text-2xl opacity-65 text-center m-3">Create Events</h1>

        <div className="grid grid-cols-2 gap-5  p-3">
          <Card>
            <form
              className="w-3/5 mx-auto mt-10"
              onSubmit={!editIsClicked ? handleCreate : editHandler}
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
                  value={date}
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
                  value={heading}
                />
              </div>
              <div>
                <label htmlFor="description" className="mb-2 text-2xl">
                  Add Description:
                </label>
                <textarea
                  name=""
                  id="description"
                  cols="20"
                  rows="5"
                  className=" outline-none border-2 border-primary p-2 w-full block"
                  onChange={handleDescription}
                  value={description}
                ></textarea>
              </div>

              <div className="flex flex-col items-start">
                <button
                  className="bg-primary text-white p-3 mt-10 cursor-pointer text-xl"
                  type="submit"
                >
                  {!editIsClicked ? "Create" : "Save Changes"}
                </button>
                {editIsClicked ? (
                  <button
                    className="mt-5 text-2xl bg-primary p-3 text-white"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                ) : null}
              </div>
            </form>
          </Card>

          <Card>
            <div className="flex flex-col items-start w-full">
              <h1 className="mt-10 text-2xl p-2 flex flex-col items-start ml-7">
                Post OverView:
              </h1>
              <div className="h-80 overflow-y-auto  mr-4 w-full p-5">
                {posts
                  ? posts.map((post) => (
                      <div key={post._id} className="m-2 p-2 relative ">
                        <div className="p-4 relative border rounded">
                          <div className="text-xl opacity-65">
                            Date:
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "2-digit", // 2-digit numeric representation of the month (01 through 12)
                              day: "2-digit", // 2-digit numeric representation of the day (01 through 31)
                              year: "numeric",
                            })}
                          </div>
                          <div className="text-xl opacity-65">
                            Heading: {post.heading}
                          </div>
                          <div className="text-xl opacity-65">
                            Description: {post.description}
                          </div>
                          <div className=" flex absolute top-2 right-2">
                            <FiEdit
                              className="p-1 m-1 text-3xl cursor-pointer"
                              onClick={() => handleEdit(post._id)}
                            />
                            <RiDeleteBin6Line
                              className="p-1 m-1 text-3xl cursor-pointer"
                              onClick={() => handleDelete(post._id)}
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ManageEvents;
