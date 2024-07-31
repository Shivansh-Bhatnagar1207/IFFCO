import React from "react";

export default function ReportCard({ title, head, desc, status }) {
  return (
    <div className="p-4 border-solid border-gray-800 rounded-md bg-accent ">
      <h2 className="font-extrabold text-2xl">{title}</h2>
      <h3 className="font-bold text-xs">{head}</h3>
      <p className="px-5 w-[80vw] ">{desc}</p>
      <span className="float-right ">{status}</span>
    </div>
  );
}
