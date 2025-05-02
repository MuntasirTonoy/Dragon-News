import React from "react";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>i am home</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
