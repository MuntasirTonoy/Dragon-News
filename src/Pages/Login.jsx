import React, { useContext } from "react";
import { Link, useNavigate } from "react-router"; // Correct import
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext); // Correct hook
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user); // Log user info
        navigate("/home"); // Redirect on success
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Wrong password or Email : Login failed "); // Show error
        // No redirect
      });
  };

  return (
    <div className="bg-base-300 h-screen p-20 flex items-center">
      <div className="bg-white w-2/5 mx-auto p-10 rounded-md">
        <h1 className="text-3xl text-primary text-center font-semibold">
          Login your account
        </h1>
        <hr className="border-t-1 border-base-300 my-4" />
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 items-center space-y-4"
        >
          {/* Email Field */}
          <div className="w-full mt-6">
            <h1 className="font-semibold mb-2">Email</h1>
            <label className="input input-bordered flex items-center gap-2 w-full">
              {/* ...svg omitted for brevity... */}
              <input
                name="email"
                type="email"
                className="grow"
                placeholder="mail@site.com"
                required
              />
            </label>
          </div>

          {/* Password Field */}
          <div className="w-full">
            <h1 className="font-semibold mb-2">Password</h1>
            <label className="input input-bordered flex items-center gap-2 w-full">
              {/* ...svg omitted for brevity... */}
              <input
                name="password"
                type="password"
                className="grow"
                required
                placeholder="Password"
              />
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-primary text-base-200 btn-block"
          >
            Login
          </button>

          {/* Register Link */}
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
