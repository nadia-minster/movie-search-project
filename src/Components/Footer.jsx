import React from "react";
import tmdbLogo from "../assets/images/tmdb.png";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={tmdbLogo} alt="the movie data base" className="tmdb" />
    </div>
  );
};

export default Footer;
