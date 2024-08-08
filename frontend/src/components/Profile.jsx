import React from "react";
import { useAuthContext } from "../hooks/UseAuthContext";
import Login from "./Login";
import User from "./User";

export default function Profile() {
  const { user } = useAuthContext();
  return (
    <div className="w-screen h-screen bg-bgc overflow-auto ">
      <header className="bg-pri h-[8vh] font-bold text-white p-2 text-xl sticky top-0">
        Profile
      </header>
      <section>
        {user && <User />}
        {!user && <Login />}
      </section>
    </div>
  );
}
