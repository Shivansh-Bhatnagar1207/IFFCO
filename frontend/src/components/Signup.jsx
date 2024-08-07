import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="w-screen h-screen bg-bgc overflow-auto ">
      <header className="bg-pri h-[8vh] font-bold text-white p-2 text-xl sticky top-0">
        Sign Up
      </header>
      <section className="grid place-content-center h-[92vh]">
        <h1 className="text-center font-bold text-2xl border border-black rounded-t-md bg-pri text-white p-1">
          Sign up
        </h1>
        <form className="grid grid-cols-2 gap-2 bg-accent p-5 border border-black rounded-b-md">
          <label>User Name:</label>
          <input type="text" name="UserID" placeholder="Enter User Name" />
          <label>User Mobile No:</label>
          <input type="text" name="UserID" placeholder="Enter User Mobile" />
          <label>User Email:</label>
          <input type="email" name="UserID" placeholder="Enter User Email" />
          <label>Create User ID:</label>
          <input type="text" name="UserID" placeholder="Enter UserID" />
          <label>Create User Password:</label>
          <input type="password" name="paswrd" placeholder="Enter Password" />
          <button className="col-span-2 bg-pri text-white hover:bg-sec w-16 m-auto p-2 my-2 rounded-md">
            Signup
          </button>
          <span className="col-span-2 text-center text-gray-700">
            Already a User?
            <Link
              to={"/profile/login"}
              className="text-black hover:text-blue-700"
            >
              Login
            </Link>
          </span>
        </form>
      </section>
    </div>
  );
}
