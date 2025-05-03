import React from "react";
import Category from "./Category";
import Middle from "./middle";
import RightBar from "./RightBar";

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-4 w-11/12 mx-auto mt-10">
      <Category />
      <Middle />
      <RightBar />
    </div>
  );
};

export default Home;
