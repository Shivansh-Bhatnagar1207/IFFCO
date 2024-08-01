import React, { useEffect, useState } from "react";
import ProjectCards from "./ProjectCards";
import { useProjectContext } from "../hooks/UseProjectContext";

const Dashboard = () => {
  const { Project, dispatch } = useProjectContext();
  const [localProjects, setLocalProjects] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("/dashboard");
        if (!response.ok) {
          throw new Error("Failed to fetch Project");
        }
        const json = await response.json();
        setLocalProjects(json);
        dispatch({ type: "SET_PROJECT", payload: json });
      } catch (error) {
        console.error("Error fetching Project", error);
      }
    };
    fetchdata();
  }, [dispatch]);

  const handleDelete = (deletedId) => {
    setLocalProjects(
      localProjects.filter((project) => project._id !== deletedId)
    );
  };
  return (
    <div className="w-screen h-screen bg-bgc overflow-auto ">
      <header className="bg-pri h-[8vh] font-bold text-white p-2 text-xl sticky top-0">
        DashBoard
      </header>
      <section>
        <h2 className="p-3 text-2xl font-bold ">Projects</h2>
        <hr className="h-px bg-gray-300 border-0" />
        <div className="grid gap-3 px-5 my-4 ">
          {localProjects.map((data) => (
            <ProjectCards
              key={data._id}
              Project={data}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
