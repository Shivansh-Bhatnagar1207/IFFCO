import React from "react";
import { useProjectContext } from "../hooks/UseProjectContext";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { useAuthContext } from "../hooks/UseAuthContext";

const ProjectCards = ({ Project }) => {
  const { dispatch } = useProjectContext();
  const { user } = useAuthContext();
  const handleDeleteProject = async () => {
    if (!user) {
      return;
    }
    try {
      const response = await fetch(`/project/dashboard/${Project._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "DELETE_PROJECT", payload: json });
        alert("Project Deleted Succesfully");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error in deleting Project :", error);
      alert("Error in Deleting Project");
    }
  };
  const {
    Project_Name,
    Project_Head,
    Start_date,
    End_date,
    Description,
    Status,
  } = Project;
  console.log(Project);

  return (
    <div className="p-4 border-solid border-gray-800 rounded-md bg-accent ">
      <h2 className="font-extrabold text-2xl text-center">{Project_Name}</h2>
      <span className="float-left">Start date:{Start_date}</span>
      <span className="float-right">End date: {End_date}</span>
      <br />
      <hr />
      <h3 className="text-xs">
        Project Head : <span className="font-bold">{Project_Head}</span>
      </h3>
      <p className="p-2 w-[80vw] ">{Description}</p>
      <span className="float-right ">{Status}</span>
      <div className="flex gap-2">
        <button
          className="flex  items-center gap-1 border-black border rounded-md p-1 font-semibold bg-bgc hover:bg-red-500 "
          onClick={handleDeleteProject}
        >
          <MdDelete /> DELETE
        </button>
        <Link
          to={`/project/${Project._id}`}
          className="flex items-center gap-1 border-black border rounded-md p-1 font-semibold bg-bgc hover:bg-green-500 "
        >
          <MdEdit /> EDIT
        </Link>
      </div>
    </div>
  );
};

export default ProjectCards;
