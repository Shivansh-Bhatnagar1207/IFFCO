import React from "react";
import { Link } from "react-router-dom";
export default function Report() {
  return (
    <div className="w-screen h-screen bg-bgc overflow-auto ">
      <header className="bg-pri h-[8vh] font-bold text-white p-2 text-xl sticky top-0">
        Report
      </header>
      <section className="flex justify-center items-center h-[90vh] gap-20">
        <Link
          to="/newreport"
          className="h-44 w-44 bg-pri text-white text-xl font-semibold grid place-items-center rounded-md hover:bg-sec"
        >
          New Report
        </Link>
        <Link
          to="/reportdetail"
          className="h-44 w-44 bg-pri text-white text-xl font-semibold grid place-items-center rounded-md hover:bg-sec"
        >
          Report Detail
        </Link>
      </section>
    </div>
  );
}
