import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

export default function Signup() {
  const { signup, error, isLoading } = useSignup();

  const [Name, setName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [UserId, setUserId] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Name || !Email || !Password || !Mobile || !UserId) {
      alert("please fill all the fields");
      return;
    }

    await signup(Email, Password, Name, Mobile, UserId);
  };

  return (
    <div
      className="w-screen h-screen bg-bgc overflow-auto"
      onSubmit={handleSubmit}
    >
      <header className="bg-pri h-[8vh] font-bold text-white p-2 text-xl sticky top-0">
        Sign Up
      </header>
      <section>
      <h2 className="p-3 text-2xl font-bold ">Welcome</h2>
      <hr className="h-px bg-gray-300 border-0" />
      <div className="w-[60vw] mx-auto my-20">
        <h1 className="text-center font-bold text-2xl border border-black rounded-t-md bg-pri text-white p-1">
          Sign Up
        </h1>
        <form className="grid grid-cols-2 gap-2 bg-accent p-5 border border-black rounded-b-md">
          <label>User Name:</label>
          <input
            type="text"
            name="Name"
            placeholder="Enter User Name"
            onChange={(e) => setName(e.target.value)}
            value={Name}
          />
          <label>User Mobile No:</label>
          <input
            type="text"
            name="Mobile"
            placeholder="Enter User Mobile"
            onChange={(e) => setMobile(e.target.value)}
            value={Mobile}
          />
          <label>User Email:</label>
          <input
            type="email"
            name="Email"
            placeholder="Enter User Email"
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
          />
          <label>Create User ID:</label>
          <input
            type="text"
            name="UserId"
            placeholder="Enter UserID"
            onChange={(e) => setUserId(e.target.value)}
            value={UserId}
          />
          <label>Create User Password:</label>
          <input
            type="password"
            name="Password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
          />
          <button
            className="col-span-2 bg-pri text-white hover:bg-sec w-16 m-auto p-2 my-2 rounded-md"
            disabled={isLoading}
          >
            Signup
          </button>
          {error && (
            <div className="text-center col-span-2 text-red-600 font-bold bg-bgc rounded-md border-black border">
              {error}
            </div>
          )}
          <span className="col-span-2 text-center text-gray-700">
            Already a User?
            <Link
              to={"/profile"}
              className="text-black hover:text-blue-700"
            >
              Login
            </Link>
          </span>
        </form>
        </div>
      </section>
    </div>
  );
}
