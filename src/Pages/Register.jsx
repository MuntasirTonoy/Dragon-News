import React, { useContext } from "react";

import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate(); // Hook for navigation
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // Update displayName and photoURL
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            navigate("/home");
            alert("Registration successful!");
          })
          .catch((error) => {
            alert("Profile update failed: " + error.message);
          });
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };

  return (
    <div className="bg-base-300    flex items-center">
      <div className="bg-white w-2/5 mx-auto my-10 p-10 rounded-md ">
        <h1 className="text-3xl  text-primary text-center font-semibold">
          Register new account
        </h1>
        <hr className="border-t-1 border-base-300 my-4" />
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-4 items-center space-y-4 mt-10"
        >
          <div className="w-full ">
            <h1 className="font-semibold mb-2">Name</h1>
            <input
              name="name"
              type="text"
              placeholder="Type your name"
              className="input  w-full"
              required
            />
          </div>
          <div className="w-full space-y-2">
            <h1 className="font-semibold mb-2">Photo URL</h1>
            <input
              name="photoURL"
              type="text"
              placeholder="paste your phot URL"
              className="input  w-full"
              required
            />{" "}
            <p className="text-accent text-xs font-semibold">or choose</p>
            <input type="file" className="file-input file-input-ghost" />
          </div>

          <div className="w-full ">
            <h1 className="font-semibold mb-2">Email</h1>
            <input
              name="email"
              type="text"
              placeholder="Type your Email"
              className="input  w-full"
              required
            />
          </div>
          <div className="w-full ">
            <h1 className="font-semibold mb-2">Password</h1>
            <input
              name="password"
              type="password"
              placeholder="Type your password"
              className="input  w-full"
              required
            />
          </div>
          <div className="flex justify-start gap-2 w-full">
            <input type="checkbox" defaultChecked className="checkbox " />{" "}
            <p> Accept all terms and condition</p>
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
