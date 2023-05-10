import React from "react";
import { useMediaQuery } from "react-responsive";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.png";

const Navbar = ({ isOpen, setIsOpen }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const NavigationStyling = () => {
    if (isMobile && isOpen) {
      return "links-mobile links-active active";
    } else if (isMobile) {
      return "links-mobile";
    } else return "links";
  };

  const navigation = (
    <nav className={NavigationStyling()}>
      <ul>
        <li>About Us</li>
        <li>Contact</li>
        <li>Saved Movies</li>
        <button className="btn">Login</button>
      </ul>
    </nav>
  );

  return (
    <section className="main-navbar main">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      {!isMobile ? (
        navigation
      ) : (
        <div className="mobile">
          <div className="hamburger hb-2" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <FaBars className="icon" />
            ) : (
              <FaTimes className="icon" />
            )}
          </div>
          <div className="mobile-menu">{navigation}</div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
