import React from "react";
import DeleteProject from "./DeleteProject";

const ProjectCards = ({ Project }) => {
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
      <DeleteProject Project={Project} />
    </div>
  );
};

export default ProjectCards;
