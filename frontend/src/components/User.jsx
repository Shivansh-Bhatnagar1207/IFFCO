import React from "react";
import { useAuthContext } from "../hooks/UseAuthContext";
import { useLogout } from "../hooks/useLogout";

export default function User() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return (
    <div className="w-screen h-screen bg-bgc overflow-auto ">
      <section className="drop-shadow-lg">
        <h2 className="p-3 text-2xl font-bold ">Welcome, {user.Name}</h2>
        <hr className="h-px bg-gray-300 border-0" />
        <section className="w-[60vw]  bg-accent mx-auto my-40 border border-black drop-shadow-lg grid grid-rows-3 grid-cols-2 p-5 rounded-md text-center ">
          <span>Name :</span>
          <span>{user.Name}</span>
          <span>User ID :</span>
          <span>{user.UserId}</span>
          <button className="col-span-2 p-2 text-white font-semibold bg-pri hover:bg-sec w-[10vw] m-auto rounded-md" onClick={logout}>
            Logout
          </button>
        </section>
      </section>
    </div>
  );
}
