import React from "react";
import { FaTasks } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { GoProjectRoadmap } from "react-icons/go";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-bgc overflow-auto ">
      <header className="bg-pri h-[8vh] font-bold text-white p-2 text-xl sticky top-0">
        Home
      </header>
      <h1 className="w-[90%] h-[20%] bg-accent mx-auto my-10 rounded-md border border-black grid place-items-center text-5xl font-bold">
        WELCOME
      </h1>
      <section className="w-[90%] h-[50%]  mx-auto my-10  grid grid-rows-2 grid-cols-3 gap-4">
        <div className="border border-black rounded-md h-full w-full p-2 bg-accent flex flex-col items-center gap-1.5">
          <MdOutlineDashboard
            size={40}
            className="border border-black p-1 rounded"
          />
          <span>Dashboard</span>
          <Link
            to={"/dashboard"}
            className="bg-pri rounded p-1.5 text-white hover:bg-sec"
          >
            Click here
          </Link>
        </div>
        <div className="border border-black rounded-md h-full w-full p-2 bg-accent flex flex-col items-center gap-1.5">
          <GoProjectRoadmap
            size={40}
            className="border border-black p-1 rounded"
          />
          <span>Projects</span>
          <Link
            to={"/project"}
            className="bg-pri rounded p-1.5 text-white hover:bg-sec"
          >
            Click here
          </Link>
        </div>
        <div className="border border-black rounded-md h-full w-full p-2 bg-accent flex flex-col items-center gap-1.5">
          <FaTasks size={40} className="border border-black p-1 rounded" />
          <span>Tasks</span>
          <Link
            to={"/tasks"}
            className="bg-pri rounded p-1.5 text-white hover:bg-sec"
          >
            Click here
          </Link>
        </div>
        <div className="border border-black rounded-md h-full w-full p-2 bg-accent flex flex-col items-center gap-1.5">
          <TbReport
            size={40}
            className="border border-black p-1 rounded"
          />
          <span>Reports</span>
          <Link
            to={"/report"}
            className="bg-pri rounded p-1.5 text-white hover:bg-sec"
          >
            Click here
          </Link>
        </div>
        <div className="border border-black rounded-md h-full w-full p-2 bg-accent flex flex-col items-center gap-1.5">
          <CgProfile size={40} className="border border-black p-1 rounded" />
          <span>Profile</span>
          <Link
            to={"/profile"}
            className="bg-pri rounded p-1.5 text-white hover:bg-sec"
          >
            Click here
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
