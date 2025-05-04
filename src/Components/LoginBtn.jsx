import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { ArrowRight } from "lucide-react";

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
    <div className="absolute top-0 right-0  p-4 ">
      {user ? (
        <div className=" flex items-center justify-start gap-3">
          <div className="flex flex-col items-center justify-start gap-1">
            <div className="avatar">
              <div className="ring-secondary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
            <div className="font-semibold">{user && user.displayName}</div>
          </div>

          <div onClick={handleLogout} className="text-sm btn btn-primary">
            Logout <ArrowRight />
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link className="text-sm btn btn-primary" to="/register">
            Register
          </Link>
          <Link className="text-sm btn btn-primary" to="/login">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoginBtn;
