import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const LoginBtn = () => {
  const { user, logout } = use(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="absolute top-0 right-0 flex items-center gap-2 p-4 ">
      {/* <CircleUserRoundIcon size={40} /> */}
      <div>{user && user.email}</div>
      <Link className="btn btn-primary rounded-none" to="/login">
        {user ? (
          <div className="flex items-center gap-2">
            <span onClick={handleLogout} className="text-sm">
              Logout
            </span>
          </div>
        ) : (
          <span className="text-sm">Login</span>
        )}
      </Link>
    </div>
  );
};

export default LoginBtn;
