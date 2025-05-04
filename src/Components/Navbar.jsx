import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-5 text-md font-semibold  text-accent items-center w-11/12 mx-auto py-4 sticky top-0  z-20 bg-base-100">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/career">Career</NavLink>
    </div>
  );
};

export default Navbar;
