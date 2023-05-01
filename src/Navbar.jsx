import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./assets/images/logo.png";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section className="main-navbar main">
      <img src={logo} alt="logo" />
      {!isMobile ? (
        <nav className="navigation">
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Saved Movies</li>
            <button className="btn">Login</button>
          </ul>
        </nav>
      ) : (
        <div class="screen-2">
          <div class="hamburger hb-2">
            {!isOpen ? (
              <FaBars onClick={() => setIsOpen(!isOpen)} />
            ) : (
              <FaTimes onClick={() => setIsOpen(!isOpen)} />
            )}
          </div>
          <div class="content">
            <nav className={`${isOpen && "active"}`}>
              <ul>
                <li>LINK 1</li>
                <li>LINK 2</li>
                <li>LINK 3</li>
                <li>LINK 4</li>
                <li>LINK 5</li>
                <li>LINK 6</li>
              </ul>
            </nav>
            <div class="container-2"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
