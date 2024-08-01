import React from "react";

const ProjectCards = ({ Project }) => {
  const {
    Project_Name,
    Project_head,
    Start_date,
    End_date,
    Description,
    status,
  } = Project;
  return (
    <div className="p-4 border-solid border-gray-800 rounded-md bg-accent ">
      <h2 className="font-extrabold text-2xl">{Project_Name}</h2>
      <h3 className="font-bold text-xs">{Project_head}</h3>
      <p className="px-5 w-[80vw] ">{Description}</p>
      <span className="float-right ">{status}</span>
    </div>
  );
};

export default ProjectCards;
