import React, { useEffect } from "react";
import ProjectCards from "./ProjectCards";
import { useProjectContext } from "../hooks/UseProjectContext";
import { useAuthContext } from "../hooks/UseAuthContext";

const Dashboard = () => {
  const { Project, dispatch } = useProjectContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("/project/dashboard", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (!response) {
          throw new Error("Failed to fetch Project");
        }
        const json = await response.json();
        dispatch({ type: "SET_PROJECT", payload: json });
      } catch (error) {
        console.error("Error fetching Project", error);
      }
    };
    if (user) {
      fetchdata();
    }
  }, [dispatch, user]);
  return (
    <div className="w-screen h-screen bg-bgc overflow-auto ">
      <header className="bg-pri h-[8vh] font-bold text-white p-2 text-xl sticky top-0">
        DashBoard
      </header>
      <section>
        <h2 className="p-3 text-2xl font-bold ">Projects</h2>
        <hr className="h-px bg-gray-300 border-0" />
        <div className="grid gap-3 px-5 my-4 ">
          {Project && Project.length > 0 ? (
            Project.map((data) => (
              <ProjectCards key={data._id} Project={data} />
            ))
          ) : (
            <span className="bg-accent w-40 text-center mx-auto my-40 p-3 font-bold border border-black rounded-md">
              No Project Available
            </span>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
