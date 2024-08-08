import React from "react";
import { useReportContext } from "../hooks/UseReportContext";
import { useAuthContext } from "../hooks/UseAuthContext";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ReportCard({ Report }) {
  const { dispatch } = useReportContext();
  const { user } = useAuthContext();
  const handleDeleteReport = async () => {
    if (!user) {
      return;
    }
    try {
      const response = await fetch(`/report/reportdetail/${Report._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "DELETE_REPORT", payload: json });
        alert("Report Deleted Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error in deleting Report :", error);
      alert("Error in Deleting Report");
    }
  };

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
      <div className="flex gap-2">
        <button
          className="flex items-center border-black border rounded-md p-0.5 font-semibold bg-bgc hover:bg-red-500 "
          onClick={handleDeleteReport}
        >
          <MdDelete /> DELETE
        </button>
        <Link
          to={`/report/newreport/${Report._id}`}
          className="flex items-center gap-1 border-black border rounded-md p-1 font-semibold bg-bgc hover:bg-green-500 "
        >
          <MdEdit /> EDIT
        </Link>
      </div>
    </div>
  );
}
