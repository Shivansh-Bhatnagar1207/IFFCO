import React from "react";

export default function DeleteProject({ Project }) {
  const handleDeleteProject = async () => {
    try {
      const response = await fetch(`/dashboard/${Project._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to  Delete Project");
      }
      alert("Project Deleted Successfully");
    } catch (error) {
      console.error("Error in deleting Project :", error);
      alert("Error in Deleting Project");
    }
  };
  
  return (
    <>
      <button className="border-black border rounded-md p-0.5 font-semibold bg-bgc hover:bg-red-500 "
      onClick={handleDeleteProject}>
        DELETE
      </button>
    </>
  );
}
