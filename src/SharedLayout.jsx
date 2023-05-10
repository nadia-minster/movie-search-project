import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SharedLayout = ({ isOpen, setIsOpen }) => {
  return (
    <div className="shared-layout main">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
