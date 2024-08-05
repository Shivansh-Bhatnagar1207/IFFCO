import React from "react";
import { useProjectContext } from "../hooks/UseProjectContext";

const ProjectCards = ({ Project }) => {
  const { dispatch } = useProjectContext();
  const handleDeleteProject = async () => {
    try {
      const response = await fetch(`/project/dashboard/${Project._id}`, {
        method: "DELETE",
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
    Project_head,
    Start_date,
    End_date,
    Description,
    Status,
  } = Project;
  return (
    <div className="p-4 border-solid border-gray-800 rounded-md bg-accent ">
      <h2 className="font-extrabold text-2xl text-center">{Project_Name}</h2>
      <span className="float-left">Start date:{Start_date}</span>
      <span className="float-right">End date: {End_date}</span>
      <br />
      <hr />
      <h3 className="text-xs">
        Project Head : <span className="font-bold">{Project_head}</span>
      </h3>
      <p className="p-2 w-[80vw] ">{Description}</p>
      <span className="float-right ">{Status}</span>
      {/* <DeleteProject Project={Project} /> */}
      <button
        className="border-black border rounded-md p-0.5 font-semibold bg-bgc hover:bg-red-500 "
        onClick={handleDeleteProject}
      >
        DELETE
      </button>
    </div>
  );
};

export default ProjectCards;
