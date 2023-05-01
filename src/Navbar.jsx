import React from "react";
import logo from "./assets/images/logo.png";

const Navbar = () => {
  return (
    <section className="main-navbar main">
      <img src={logo} alt="logo" />
      <nav className="navigation">
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Saved Movies</li>
          <button className="btn">Login</button>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
