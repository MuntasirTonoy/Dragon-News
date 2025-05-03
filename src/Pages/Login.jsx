import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="bg-base-300 h-screen p-20 flex items-center">
      <div className="bg-white w-2/5 mx-auto p-10 rounded-md ">
        <h1 className="text-3xl text-primary text-center font-semibold">
          Login your account
        </h1>
        <hr className="border-t-1 border-base-300 my-4" />
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 items-center space-y-4"
        >
          <div className="w-full mt-6">
            <h1 className="font-semibold mb-2">Email</h1>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                name="email"
                type="email"
                className="grow"
                placeholder="mail@site.com"
                required
              />
            </label>
          </div>
          <div className="w-full ">
            <h1 className="font-semibold mb-2">Password</h1>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                name="password"
                type="password"
                className="grow"
                required
                placeholder="Password"
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>
          </div>

          <button
            type="submit"
            className="btn bg-primary text-base-200 btn-block"
          >
            Login
          </button>
          <div>
            <p className="text-sm font-semibold">
              Don't have account?{" "}
              <Link className="text-red-500" to="/register">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
