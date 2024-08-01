import React, { useState } from "react";
import { useProjectContext } from "../hooks/UseProjectContext";

export default function ProjectForm() {
  const { dispatch } = useProjectContext();
  const [formData, setFormData] = useState({
    Project_Name: "",
    Start_date: "",
    End_date: "",
    Project_head: "",
    Description: "",
  });
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (
      name === "Project_Name" ||
      name === "Start_date" ||
      name === "End_date" ||
      name === "Project_head" ||
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

    const response = await fetch("/project/", {
      method: "POST",
      body: JSON.stringify({ ...formData }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      alert("Form Submitted Succesfully");
      setFormData({
        Project_Name: "",
        Start_date: "",
        End_date: "",
        Project_head: "",
        Description: "",
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
          type="text"
          name="Start_date"
          id="start"
          value={formData.Start_date}
          onChange={handleChange}
        />
        <label>End Date</label>
        <input
          type="text"
          name="End_date"
          id="end"
          value={formData.End_date}
          onChange={handleChange}
        />
        <label>Project Head</label>
        <input
          type="text"
          placeholder="Project head"
          name="Project_head"
          value={formData.Project_head}
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
        <button
          type="submit"
          className="bg-sec rounded p-3 col-span-2 text-white font-semibold "
        >
          submit
        </button>
      </form>
    </>
  );
}
