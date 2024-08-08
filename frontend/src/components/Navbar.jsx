import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaTasks } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { CgHome, CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { GoProjectRoadmap } from "react-icons/go";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();

  function handleclick() {
    logout();
  }

  const menus = [
    { name: "Home", link: "/", icon: CgHome },
    { name: "Dashboard", link: "/project/dashboard", icon: MdOutlineDashboard },
    { name: "Project", link: "/project", icon: GoProjectRoadmap },
    { name: "Tasks", link: "/task", icon: FaTasks },
    { name: "Report", link: "/report", icon: TbReport },
    { name: "Profile", link: "/profile", icon: CgProfile },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-pri h-[100vh] ${
        open ? "w-48" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={` ${
              menu?.margin && "mt-5"
            } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-sec rounded-md`}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
      <div>
        <button onClick={handleclick}>
          <FaTasks />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
