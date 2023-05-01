import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const SharedLayout = () => {
  return (
    <div className="shared-layout main">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
