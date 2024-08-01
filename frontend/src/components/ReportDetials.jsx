import React, { useEffect } from "react";
import ReportCard from "./ReportCard";
import { useReportContext } from "../hooks/UseReportContext";

export default function ReportDetials() {
  const { Report, dispatch } = useReportContext();
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("/report/reportdetail");
        if (!response) {
          throw new Error("Failed to Fetch Report");
        }
        const json = await response.json();
        dispatch({ type: "SET_REPORT", payload: json });
      } catch (error) {
        console.error("Error Fetching Report", error);
      }
    };
    fetchdata();
  }, [dispatch]);

  return (
    <div className="w-screen h-screen bg-bgc overflow-auto ">
      <header className="bg-pri h-[8vh] font-bold text-white p-2 text-xl sticky top-0">
        Report
      </header>
      <section>
        <h2 className="p-3 text-2xl font-bold ">Report</h2>
        <hr className="h-px bg-gray-300 border-0" />
        <div className="grid gap-3 px-5 my-4">
          {Report.map((data) => (
            <ReportCard key={data._id} Report={data} />
          ))}
        </div>
      </section>
    </div>
  );
}
