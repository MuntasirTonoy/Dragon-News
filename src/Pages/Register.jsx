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

          <div className="space-y-2">
            <button className="btn btn-block bg-black text-white border-black">
              <svg
                aria-label="GitHub logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                ></path>
              </svg>
              Continue with GitHub
            </button>

            {/* Google */}
            <button className="btn btn-block bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Continue with Google
            </button>
          </div>

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
