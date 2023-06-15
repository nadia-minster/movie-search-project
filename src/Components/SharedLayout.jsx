import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../context";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg1 from "../assets/images/home-background.png";
import bg2 from "../assets/images/res.png";

const SharedLayout = () => {
  const { isOpen, setIsOpen } = useGlobalContext();
  const [backgroundImage, setBackgroundImage] = useState(bg1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setBackgroundImage(bg1);
    } else {
      setBackgroundImage(bg2);
    }

    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, [location, backgroundImage]);

  return (
    <div
      style={{
        background: isImageLoaded ? `url(${backgroundImage})` : "#5215ff",
      }}
      className="shared-layout main"
    >
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
