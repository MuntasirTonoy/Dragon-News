import React from "react";
import { Outlet } from "react-router";
import Header from "./Components/Header";
import LatestNews from "./Components/LatestNews";
import LoginBtn from "./Components/Loginbtn";
import Navbar from "./Components/Navbar";

const Root = () => {
  return (
    <div>
      <Header /> <Navbar />
      <section className="w-11/12 mx-auto">
        <LatestNews />
      </section>
      <LoginBtn />
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
