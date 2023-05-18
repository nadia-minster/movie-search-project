import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HomeCTA = (props) => {
  return (
    <div className="home-main">
      <h1>Can't pick a movie?</h1>
      <h3>
        Say goodbye to endless scrolling and hello to movie night done right!
      </h3>
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
