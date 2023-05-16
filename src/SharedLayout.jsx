import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg1 from "./assets/images/home-background.png";
import bg2 from "./assets/images/res.png";

const SharedLayout = () => {
  const { isOpen, setIsOpen } = useGlobalContext();
  const [backgroundImage, setBackgroundImage] = useState(bg1);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setBackgroundImage(bg1);
    } else if (location.pathname === "/results") {
      setBackgroundImage(bg2);
    } else {
      setBackgroundImage(bg2);
    }
  }, [location]);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="shared-layout main"
    >
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
