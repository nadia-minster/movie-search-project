import React from "react";
import { useMediaQuery } from "react-responsive";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = ({ isOpen, setIsOpen }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const NavigationStyling = () => {
    if (isMobile && isOpen) {
      return "links-mobile links-active active";
    } else if (isMobile) {
      return "links-mobile";
    } else return "links";
  };

  const closeNavigation = () => {
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  };

  const navigation = (
    <nav className={NavigationStyling()}>
      <ul>
        <Link to="/about" className="link-element" onClick={closeNavigation}>
          About
        </Link>
        <Link to="/watched" className="link-element" onClick={closeNavigation}>
          Rated Movies
        </Link>
        <Link className="btn" to="/saved" onClick={closeNavigation}>
          Saved Movies
        </Link>
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
          <div className={`mobile-menu ${isOpen && "mobile-menu-active"}`}>
            {navigation}
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
