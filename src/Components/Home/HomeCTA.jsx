import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HomeCTA = (props) => {
  return (
    <div className="home-main">
      <h1>Can't pick a movie?</h1>
      <p>
        Find your perfect movie in seconds! Choose a year and genre, and we'll
        show you three top picks to match your taste. Say goodbye to endless
        scrolling and hello to movie night done right!
      </p>
      <button
        className={`btn btn-main ${props.isOpen && "hidden"}`}
        onClick={() => props.setIsSearchActive(true)}
      >
        Begin your search
        <FaArrowRight className="arrow-icon" />
      </button>
    </div>
  );
};

export default HomeCTA;
