import React from "react";
import DeleteReport from "./DeleteReport";

export default function ReportCard({ Report }) {
  const {
    Report_Type,
    Project_Name,
    Start_date,
    End_date,
    Project_Head,
    TeamID,
    Description,
  } = Report;
  return (
    <div className="p-4 border-solid border-gray-800 rounded-md bg-accent w-[80%] m-auto">
      <span className="text-xs float-left bg-bgc p-1 rounded-md border border-black">
        {TeamID}
      </span>
      <h2 className="font-extrabold text-2xl text-center">{Project_Name}</h2>
      <span className="float-left">Start date:{Start_date}</span>
      <span className="float-right">End date: {End_date}</span>
      <br />
      <hr />
      <h3 className="text-xs">
        Project Head : <span className="font-bold">{Project_Head}</span>
      </h3>
      <p className="p-2 w-[80vw] ">{Description}</p>
      <span className="float-right ">{Report_Type}</span>
      <button>
        <DeleteReport Report={Report} />
      </button>
    </div>
  );
}
