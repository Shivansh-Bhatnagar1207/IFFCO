import React, { useState } from "react";
import { useReportContext } from "../hooks/UseReportContext";

export default function ReportForm() {
  const { dispatch } = useReportContext();
  const [formData, setFormData] = useState({
    Report_Type: "",
    Project_Name: "",
    Start_date: "",
    End_date: "",
    Project_Head: "",
    TeamID: "",
    Description: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (
      name === "Report_Type" ||
      name === "Project_Name" ||
      name === "Start_date" ||
      name === "End_date" ||
      name === "Project_Head" ||
      name === "TeamID" ||
      name === "Description"
    ) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/report/newreport/", {
      method: "POST",
      body: JSON.stringify({ ...formData }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      alert("Form Submitted Successfully");
      setFormData({
        Report_Type: "",
        Project_Name: "",
        Start_date: "",
        End_date: "",
        Project_Head: "",
        TeamID: "",
        Description: "",
      });
      dispatch({ type: "CREATE_REPORT", payload: data });
    } else {
      throw new Error("Failed to Submit Form");
    }
  };

  return (
    <>
      <form
        className="mx-4 my-4 p-3 grid grid-rows-4 grid-cols-2 gap-3 border border-black rounded"
        onSubmit={handleSubmit}
      >
        <label className="block mb-2">Report Type:</label>
        <select
          name="Report_Type"
          value={formData.Report_Type}
          onChange={handleChange}
        >
          <option value="Task_Summary">Task Summary</option>
          <option value="User_Activity">User Activity</option>
          <option value="Project_Progress">Project Progress</option>
        </select>
        <label> Project Name</label>
        <input
          type="text"
          placeholder="  Project Name"
          name="Project_Name"
          value={formData.Project_Name}
          onChange={handleChange}
        />
        <label>Start Date</label>
        <input
          type="text"
          placeholder="Start Date"
          name="Start_date"
          id="start"
          value={formData.Start_date}
          onChange={handleChange}
        />
        <label>End Date</label>
        <input
          type="text"
          placeholder="End_date"
          name="End_date"
          id="start"
          value={formData.End_date}
          onChange={handleChange}
        />
        <label>Project Head</label>
        <input
          type="text"
          placeholder="Project head"
          name="Project_Head"
          value={formData.Project_Head}
          onChange={handleChange}
        />

        <label>Team ID</label>
        <input
          type="text"
          placeholder="Team ID"
          name="TeamID"
          value={formData.TeamID}
          onChange={handleChange}
        />
        <label>Description</label>
        <textarea
          placeholder="  Project Description"
          rows={5}
          name="Description"
          value={formData.Description}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-pri rounded p-3 col-span-2 text-white font-semibold hover:bg-sec "
        >
          submit
        </button>
      </form>
    </>
  );
}
