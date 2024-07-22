import React from "react";

export default function Form() {
  return (
    <>
      <form className="mx-4 my-4 p-3 grid grid-rows-4 grid-cols-2 gap-3 border border-black rounded  ">
        <label>Project Name</label>
        <input type="text" placeholder="Project Name" />
        <label>Start Date</label>
        <input type="date" name="start" id="start" />
        <label>End Date</label>
        <input type="date" name="start" id="start" />
        <label>
            Project Head
        </label>
        <input type="text" placeholder="Project head" />
        <label>
            Description
        </label>
        <textarea placeholder="Project Description" rows={5}/>
        <button type="submit" className="bg-sec rounded p-3 col-span-2 text-white font-semibold ">submit</button>
      </form>
    </>
  );
}
