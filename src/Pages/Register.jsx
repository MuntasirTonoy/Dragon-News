import React from "react";

import { Link } from "react-router";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-base-300    flex items-center">
      <div className="bg-white w-2/5 mx-auto my-10 p-10 rounded-md ">
        <h1 className="text-3xl  text-primary text-center font-semibold">
          Register new account
        </h1>
        <hr className="border-t-1 border-base-300 my-4" />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center space-y-4 mt-10"
        >
          <div className="w-full ">
            <h1 className="font-semibold mb-2">Name</h1>
            <input
              type="text"
              placeholder="Type your name"
              className="input  w-full"
            />
          </div>
          <div className="w-full space-y-2">
            <h1 className="font-semibold mb-2">Photo URL</h1>
            <input
              type="text"
              placeholder="paste your phot URL"
              className="input  w-full"
            />{" "}
            <p className="text-accent text-xs font-semibold">or choose</p>
            <input type="file" className="file-input file-input-ghost" />
          </div>

          <div className="w-full ">
            <h1 className="font-semibold mb-2">Email</h1>
            <input
              type="text"
              placeholder="Type your Email"
              className="input  w-full"
            />
          </div>
          <div className="w-full ">
            <h1 className="font-semibold mb-2">Password</h1>
            <input
              type="password"
              placeholder="Type your password"
              className="input  w-full"
            />
          </div>

          <button
            type="submit"
            className="btn bg-primary text-base-200 btn-block"
          >
            Register
          </button>
          <div>
            <p className="text-sm font-semibold">
              Already have an account?{" "}
              <Link className="text-red-500" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
