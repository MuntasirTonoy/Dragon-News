import React from "react";
import { format } from "date-fns";

const Header = () => {
  const date = format(new Date(), "eeee, MMMM dd, yyyy");
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-3">
      <h1 className="text-6xl  UnifrakturMaguntia">The Dragon News</h1>
      <p className="text-xl text-accent">Journalism Without Fear or Favour</p>
      <div className="font-semibold"> {date} </div>
    </div>
  );
};

export default Header;
