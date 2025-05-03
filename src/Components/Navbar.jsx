import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-11/12 mx-auto py-4 sticky top-0  z-20 bg-base-100">
      <div className="flex gap-4 font-semibold text-xl text-accent">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-4  "></div>
    </div>
  );
};

export default Navbar;
