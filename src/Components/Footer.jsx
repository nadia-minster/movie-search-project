import React from "react";
import logo from "../assets/images/tmdblogo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="the movie data base" className="tmdb" />
    </div>
  );
};

export default Footer;
