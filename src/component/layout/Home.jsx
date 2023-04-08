import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Home;
