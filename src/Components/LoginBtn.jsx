import { CircleUserRoundIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const LoginBtn = () => {
  return (
    <div className="absolute top-0 right-0 flex items-center gap-2 p-4 ">
      <CircleUserRoundIcon size={40} />
      <Link className="btn btn-primary rounded-none" to="/login">
        {" "}
        Login{" "}
      </Link>
    </div>
  );
};

export default LoginBtn;
