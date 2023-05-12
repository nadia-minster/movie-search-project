import React, { useState, useEffect } from "react";
import useGetGenre from "../hooks/useGetGenre";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Form = (props) => {
  const navigate = useNavigate();
  const { genres } = useGetGenre();

  const selectGenres = genres?.map((genre) => {
    return (
      <option value={genre.id} key={genre.id} id="genre">
        {genre.name}
      </option>
    );
  });

  const selectDecades = [];
  for (let i = 1900; i <= 2020; i += 10) {
    selectDecades.push(
      <option value={decade.id} key={decade.id} id="decade">
        {`${i}s`}
      </option>
    );
  }

  console.log(selectDecades);

  const handleClick = () => {
    return navigate("/result");
  };

  return (
    <div className={`home-main form-test ${props.isOpen && "hidden"}`}>
      <h1>Begin your search!</h1>
      <label htmlFor="year">Enter a Year:</label>
      <input
        type="number"
        min="1895"
        max="2023"
        className="form-input"
        placeholder="2023"
        onChange={(e) => props.setYear(e.target.value)}
      />
      <select id="decade" className="form-input">
        {selectDecades}
      </select>
      <label htmlFor="genre">Select a Genre:</label>
      <select
        id="genre"
        className="form-input"
        onChange={(e) => handleGenreChange(e)}
      >
        {selectGenres}
      </select>
      <button className="btn btn-input" onClick={handleClick}>
        TOP 3 IMDB <FaArrowRight className="arrow-icon" />
      </button>
      <button className="btn-no-background btn-input">
        ...or surprise me! <FaArrowRight className="arrow-icon" />
      </button>
    </div>
  );
};

export default Form;
