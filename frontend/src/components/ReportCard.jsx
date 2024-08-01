import React from "react";

export default function ReportCard({
  title,
  head,
  start,
  end,
  desc,
  type,
  TeamId,
}) {
  return (
    <div className="p-4 border-solid border-gray-800 rounded-md bg-accent ">
      <span className="text-xs float-left bg-bgc p-1 rounded-md border border-black">{TeamId}</span>
      <h2 className="font-extrabold text-2xl text-center">{title}</h2>
      <span className="float-left">Start date:{start}</span>
      <span className="float-right">End date: {end}</span>
      <br />
      <hr />
      <h3 className="text-xs">
        Project Head : <span className="font-bold">{head}</span>
      </h3>
      <p className="p-2 w-[80vw] ">{desc}</p>
      <span className="float-right ">{type}</span>
    </div>
  );
}
