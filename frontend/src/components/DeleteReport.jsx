import React from "react";

export default function DeleteReport({ Report }) {
  const handleDeleteReport = async () => {
    try {
      const response = await fetch(`/report/reportdetail/${Report._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to  Delete Report");
      }
      alert("Report Deleted Successfully");
    } catch (error) {
      console.error("Error in deleting Report :", error);
      alert("Error in Deleting Report");
    }
  };

  return (
    <>
      <button
        className="border-black border rounded-md p-0.5 font-semibold bg-bgc hover:bg-red-500 "
        onClick={handleDeleteReport}
      >
        DELETE
      </button>
    </>
  );
}
