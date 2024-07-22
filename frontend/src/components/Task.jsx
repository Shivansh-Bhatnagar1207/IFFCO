import React from "react";

export default function Task() {
  return (
    <div className="w-screen h-screen bg-bgc overflow-auto ">
      <header className="bg-pri h-[8vh] font-bold text-white p-2 text-xl sticky top-0">
        Tasks
      </header>
      <section>
        <h2 className="p-3 text-2xl font-bold ">Task List</h2>
        <hr className="h-px bg-gray-300 border-0" />
        <div className="px-4 m-5 border border-black flex justify-between bg-accent rounded">
          <span>Project Name</span>
          <span>Project Head</span>
          <span>Status</span>
          <span>Due Date</span>
          <span>action</span>
        </div>
      </section>
    </div>
  );
}
