import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="w-screen h-screen bg-bgc overflow-auto ">
      <header className="bg-pri h-[8vh] font-bold text-white p-2 text-xl sticky top-0">
        Login
      </header>
      <section className="grid place-content-center h-[92vh]">
        <h1 className="text-center font-bold text-2xl border border-black rounded-t-md bg-pri text-white p-1">
          Login
        </h1>
        <form className="grid grid-cols-2 gap-2 bg-accent p-5 border border-black rounded-b-md">
          <label>User ID:</label>
          <input type="text" name="UserID" placeholder="Enter UserID" />
          <label>User Password:</label>
          <input type="password" name="paswrd" placeholder="Enter Password" />
          <button className="col-span-2 bg-pri text-white hover:bg-sec w-14 m-auto p-1 my-2 rounded-md">
            Login
          </button>
          <span className="col-span-2 text-center text-gray-700">
            new user?{" "}
            <Link
              to={"/profile/signup"}
              className="text-black hover:text-blue-700"
            >
              Sign up
            </Link>
          </span>
        </form>
      </section>
    </div>
  );
}
