import React, { useEffect } from "react";
import { useState, useRef } from "react";
import DashBoardHeader from "../../UI/Dashboard/DashBoardHeader";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Card from "../../UI/Card";

const ManageNotice = () => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [notices, setNotices] = useState([]);
  const [editIsClicked, setEditIsClicked] = useState(false);
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await fetch(
          "https://college-backend-pxbb.onrender.com/api/admin/get-notice",
          {
            method: "GET",

            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();

        setNotices(data);
      } catch (error) {
        console.log("error fetching notice:", error);
      }
    };

    fetchNotice();
  }, [notices]);

  useEffect(() => {
    if (editIsClicked) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://college-backend-pxbb.onrender.com/api/admin/a-notice/${id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          // setDate(formattedDate);
          if (response.ok) {
            setHeading(data.heading);
            setDescription(data.description);
          }
        } catch (error) {
          console.log("error fetching posts:", error);
        }
      };

      fetchData();
    }
  }, [editIsClicked, id]);

  const handleHeading = (e) => {
    setHeading(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
    // fileInputRef.current.files[0];
    // e.target.files[0];
  };

  const handleEdit = async (id) => {
    setEditIsClicked(true);
    setId(id);
  };

  const handleClear = () => {
    setHeading("");
    setDescription("");
    fileInputRef.current.value = "";
    setEditIsClicked(false);
  };

  const editHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("heading", heading);
    formData.append("description", description);

    const response = await fetch(
      `https://college-backend-pxbb.onrender.com/api/admin/update-notice/${id}`,
      {
        method: "PATCH",
        body: formData,
        // headers: {
        //   "Content-Type": "application/json",
        // },
      }
    );

    const json = await response.json();

    if (response.ok) {
      console.log("handle edit", json.msg);
      console.log("inside handle edit");

      setHeading("");
      setDescription("");
      fileInputRef.current.value = "";
      // setFile(null);
      setEditIsClicked(false);
    }

    if (!response.ok) {
      console.log("error editing");
      setMessage(json.msg);
    }
  };

  const handleDelete = async (id) => {
    console.log("inside handle delete");
    const response = await fetch(
      `https://college-backend-pxbb.onrender.com/api/admin/delete-notice/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    if (response.ok) {
      console.log("the notice response is", json.msg);
    }

    if (!response.ok) {
      console.log("the notice response is", json.error);
    }
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("heading", heading);
    formData.append("description", description);

    const response = await fetch(
      "https://college-backend-pxbb.onrender.com/api/admin/create-notice",

      {
        method: "POST",
        body: formData,
      }
    );

    const json = await response.json();
    if (response.ok) {
      console.log("the notice response is", json.msg);

      setHeading("");
      setDescription("");
      // setFile(null);
      fileInputRef.current.value = "";
    }

    if (!response.ok) {
      console.log("the notice response is", json.error);
    }
  };
  return (
    <>
      <DashBoardHeader />
      <div className="ml-[300px] p-3">
        <h1 className="flex flex-col items-center text-2xl opacity-65">
          Create Notice
        </h1>
        <div className="grid grid-cols-2  gap-5 p-3">
          <Card>
            <form
              className="w-full"
              onSubmit={!editIsClicked ? handleSumbit : editHandler}
            >
              <div className="flex flex-col items-start m-2">
                <label htmlFor="heading" className="mb-2 text-2xl">
                  Heading:
                </label>
                <input
                  type="text"
                  id="heading"
                  className="outline-none  border-2 border-primary w-4/5 p-2"
                  value={heading}
                  onChange={handleHeading}
                />
              </div>
              <div className="flex flex-col items-start m-2">
                <label htmlFor="description" className="mb-2 text-2xl">
                  Description:
                </label>

                <textarea
                  name=""
                  id="description"
                  cols="30"
                  rows="10"
                  className="outline-none border-2 border-primary rounded w-4/5 p-2"
                  onChange={handleDescription}
                  value={description}
                ></textarea>
              </div>
              <div className="flex flex-col items-start m-2">
                <label htmlFor="notice" className="mb-2 text-2xl">
                  Image:
                </label>
                <input
                  type="file"
                  id="notice"
                  ref={fileInputRef}
                  onChange={handleFile}
                />
              </div>
              <div className="flex flex-col items-start m-2">
                <button
                  type="submit"
                  className="mt-5 text-2xl bg-primary p-3 text-white"
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
            <div className="w-full text-2xl">Notice overview</div>
            <div className="h-80 overflow-y-auto  mr-4 w-full p-5">
              {notices &&
                notices.map((notice) => {
                  return (
                    <div key={notice._id} className="relative">
                      <div className="p-4 relative border rounded mb-4">
                        <div className="w-[200px]">
                          {/* {console.log(notice.image)} */}
                          <img
                            src={`https://college-backend-pxbb.onrender.com/${notice.image}`}
                            alt="notice"
                            className="object-cover h-48 w-full"
                          />
                        </div>
                        <div className="text-xl opacity-65">
                          Heading: {notice.heading}
                        </div>
                        <div className="text-xl opacity-65">
                          Description: {notice.description}
                        </div>
                        <div className=" flex absolute top-2 right-2">
                          <FiEdit
                            className="p-1 m-1 text-3xl cursor-pointer"
                            onClick={() => handleEdit(notice._id)}
                          />
                          <RiDeleteBin6Line
                            className="p-1 m-1 text-3xl cursor-pointer"
                            onClick={() => handleDelete(notice._id)}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ManageNotice;
