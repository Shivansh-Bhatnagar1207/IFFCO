import React, { useState } from "react";
import { useProjectContext } from "../hooks/UseProjectContext";
import { useAuthContext } from "../hooks/UseAuthContext";

export default function ProjectForm() {
  const { dispatch } = useProjectContext();
  const { user } = useAuthContext();
  const [formData, setFormData] = useState({
    Project_Name: "",
    Start_date: "",
    End_date: "",
    Project_Head: "",
    Description: "",
    Status: "Pending",
  });
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (name === "Start_date" || name === "End_date") {
      const startDate =
        name === "Start_date" ? new Date(value) : new Date(formData.Start_date);
      const endDate =
        name === "End_date" ? new Date(value) : new Date(formData.End_date);

      if (startDate > endDate) {
        alert("Start date should be less than or equal to the end date.");
        return;
      }
    }

    if (
      name === "Report_Type" ||
      name === "Project_Name" ||
      name === "Start_date" ||
      name === "End_date" ||
      name === "Project_Head" ||
      name === "TeamID" ||
      name === "Description" ||
      name === "Status"
    ) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You Must Be logged in");
      return;
    }

    const {
      Project_Name,
      Project_Head,
      Start_date,
      End_date,
      Description,
      Status,
    } = formData;
    if (
      !Project_Name ||
      !Start_date ||
      !End_date ||
      !Project_Head ||
      !Description ||
      !Status
    ) {
      alert("Please Fill all the fields");
    }

    const response = await fetch("/project/", {
      method: "POST",
      body: JSON.stringify({ ...formData }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      alert("Form Submitted Succesfully");
      setFormData({
        Project_Name: "",
        Start_date: "",
        End_date: "",
        Project_Head: "",
        Description: "",
        Status: "",
      });
      dispatch({ type: "CREATE_PROJECT", payload: data });
    } else {
      throw new Error("Failed To submit form");
    }
  };
  return (
    <>
      <form
        className="mx-4 my-4 p-3 grid grid-rows-4 grid-cols-2 gap-3 border border-black rounded "
        onSubmit={handleSubmit}
      >
        <label>Project Name</label>
        <input
          type="text"
          placeholder="Project Name"
          name="Project_Name"
          value={formData.Project_Name}
          onChange={handleChange}
        />
        <label>Start Date</label>
        <input
          type="date"
          name="Start_date"
          placeholder="Start Date"
          id="start"
          value={formData.Start_date}
          onChange={handleChange}
        />
        <label>End Date</label>
        <input
          type="date"
          name="End_date"
          id="end"
          placeholder="End Date"
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
        <label>Description</label>
        <textarea
          placeholder="Project Description"
          name="Description"
          rows={5}
          value={formData.Description}
          onChange={handleChange}
        />
        <label>Status</label>
        <select
          name="Status"
          id="Status"
          value={formData.Status}
          onChange={handleChange}
        >
          <option value="Pending">Pending</option>
          <option value="Working">Working</option>
          <option value="On-Hold">on-Hold</option>
        </select>
        <button
          type="submit"
          className="bg-pri hover:bg-sec rounded p-3 col-span-2 text-white font-semibold "
        >
          submit
        </button>
      </form>
    </>
  );
}
