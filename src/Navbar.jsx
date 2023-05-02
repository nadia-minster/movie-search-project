import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const NavigationStyling = () => {
    if (isMobile && isOpen) {
      return "links-mobile links-active";
    } else if (isMobile) {
      return "links-mobile";
    } else return "links";
  };

  const navigation = (
    <nav className={`${isOpen && isMobile ? "active" : "navigation"}`}>
      <ul className={NavigationStyling()}>
        <li>About Us</li>
        <li>Contact</li>
        <li>Saved Movies</li>
        <button className="btn">Login</button>
      </ul>
    </nav>
  );

  return (
    <section className="main-navbar main">
      <img src={logo} alt="logo" />
      {!isMobile ? (
        navigation
      ) : (
        <div>
          <div class="hamburger hb-2" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <FaBars className="icon" />
            ) : (
              <FaTimes className="icon" />
            )}
          </div>
          <div class="mobile-menu">{navigation}</div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
