import React from "react";
export default function ReportForm() {
  return (
    <>
      <form className="mx-4 my-4 p-3 grid grid-rows-4 grid-cols-2 gap-3 border border-black rounded  ">
        <label className="block mb-2">Report Type:</label>
        <select
        // id="reportType"
        // value={reportType}
        // onChange={(e) => setReportType(e.target.value)}
        // className="mb-4 p-2 border border-gray-300 rounded w-full"
        >
          <option value="task_summary">Task Summary</option>
          <option value="user_activity">User Activity</option>
          <option value="project_progress">Project Progress</option>
        </select>
        <label> Project Name</label>
        <input type="text" placeholder="  Project Name" />
        <label>Start Date</label>
        <input type="date" name="start" id="start" />
        <label>End Date</label>
        <input type="date" name="start" id="start" />
        <label>Project Head</label>
        <input type="text" placeholder="  Project head" />

        <label>Team ID</label>
        <input type="text" placeholder="  Team ID" />
        <label>Description</label>
        <textarea placeholder="  Project Description" rows={5} />
        <button
          type="submit"
          className="bg-sec rounded p-3 col-span-2 text-white font-semibold hover:bg-pri "
        >
          submit
        </button>
      </form>
    </>
  );
}
