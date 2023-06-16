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
    setIsImageLoaded(false);

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

  const style = {
    background: "#5215ff",
    backgroundImage: `url(${backgroundImage})`,
    opacity: isImageLoaded ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
  };

  return (
    <div style={style} className="shared-layout main">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
