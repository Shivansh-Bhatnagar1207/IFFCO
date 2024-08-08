import React, { useEffect, useState } from "react";
import { useReportContext } from "../hooks/UseReportContext";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/UseAuthContext";

export default function UpdateReport() {
  const { dispatch } = useReportContext();
  const { user } = useAuthContext();
  const [formData, setFormData] = useState({
    Report_Type: "TASK SUMMARY",
    Project_Name: "",
    Start_date: "",
    End_date: "",
    Project_Head: "",
    TeamID: "",
    Description: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const getSingleReport = async () => {
    const response = await fetch(`/report/reportdetail/${id}`, {
      "Authorization": `Bearer ${user.token}`,
    });
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
    }
    if (response.ok) {
      console.log(result);
      setFormData({
        Report_Type: result.Report_Type,
        Project_Name: result.Project_Name,
        Start_date: result.Start_date,
        End_date: result.End_date,
        Project_Head: result.Project_Head,
        TeamID: result.TeamID,
        Description: result.Description,
      });
    }
  };

  useEffect(() => {
    getSingleReport();
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (name === "Start_date" || name === "End_date") {
      // Ensure both dates are valid before performing the check
      const startDate =
        name === "Start_date" ? new Date(value) : new Date(formData.Start_date);
      const endDate =
        name === "End_date" ? new Date(value) : new Date(formData.End_date);

      if (startDate > endDate) {
        alert("Start date should be less than or equal to the end date.");
        return; // Early exit if the validation fails
      }
    }

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

  const handleUpadate = async (e) => {
    e.preventDefault();
    if(!user){
      return
    }
    const {
      Report_Type,
      Project_Name,
      Start_date,
      End_date,
      Project_Head,
      TeamID,
      Description,
    } = formData;
    if (
      !Report_Type ||
      !Project_Name ||
      !Start_date ||
      !End_date ||
      !Project_Head ||
      !TeamID ||
      !Description
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const response = await fetch(`/report/newreport/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ ...formData }),
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${user.token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      alert("Form Edited Successfully");
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
      navigate("/report/reportdetail");
    } else {
      throw new Error("Failed to Update Form");
    }
  };
  return (
    <div className="w-screen h-screen bg-bgc overflow-auto ">
      <header className="bg-pri h-[8vh] font-bold text-white p-2 text-xl sticky top-0">
        Generate Report
      </header>
      <section>
        <h2 className="p-3 text-2xl font-bold ">New Report</h2>
        <hr className="h-px bg-gray-300 border-0" />
        <form
          className="mx-4 my-4 p-3 grid grid-rows-4 grid-cols-2 gap-3 border border-black rounded"
          onSubmit={handleUpadate}
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
            type="date"
            placeholder="Start Date"
            name="Start_date"
            id="start"
            value={formData.Start_date}
            onChange={handleChange}
          />
          <label>End Date</label>
          <input
            type="date"
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
      </section>
    </div>
  );
}
