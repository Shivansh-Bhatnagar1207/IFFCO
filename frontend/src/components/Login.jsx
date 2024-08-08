import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name,setName] = useState("")
  const [UserId,setUserId] = useState("")
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(Name,UserId,Email,Password);
  };

  return (
    <section>
      <h2 className="p-3 text-2xl font-bold ">Welcome</h2>
      <hr className="h-px bg-gray-300 border-0" />
      <div className="w-[60vw] mx-auto my-20">
        <h1 className="text-center font-bold text-2xl border border-black rounded-t-md bg-pri text-white p-1">
          Login
        </h1>
        <form
          className="grid grid-cols-2 gap-2 bg-accent p-5 border border-black rounded-b-md text-right"
          onSubmit={handleSubmit}
        >
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={Name}
          />
          <label>UserID:</label>
          <input
            type="text"
            name="UserId"
            placeholder="Enter UserID"
            onChange={(e) => setUserId(e.target.value)}
            value={UserId}
          />
          <label>Email:</label>
          <input
            type="Email"
            name="Email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
          />
          <label>User Password:</label>
          <input
            type="password"
            name="Password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
          />
          <button
            className="col-span-2 bg-pri text-white hover:bg-sec w-14 m-auto p-1 my-2 rounded-md"
            disabled={isLoading}
          >
            Login
          </button>
          {error && (
            <div className="col-span-2 text-red-600 bg-bgc rounded-md text-center">
              {error}
            </div>
          )}
          <span className="col-span-2 text-center text-gray-700">
            New user?{" "}
            <Link
              to={"/profile/signup"}
              className="text-black hover:text-blue-700"
            >
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </section>
  );
}
