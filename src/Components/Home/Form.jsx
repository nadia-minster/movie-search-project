import React, { useState, useEffect } from "react";
import useGetGenre from "../../hooks/useGetGenre";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Form = (props) => {
  const [decade, setDecade] = useState("1990");
  const navigate = useNavigate();
  const { genres } = useGetGenre();

  const randomYear = () => {
    return 1900 + Math.floor(Math.random() * 123);
  };

  const randomGenre = () => {
    return Math.floor(Math.random() * 19);
  };

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
      <option value={i} key={i} id="decade">
        {`${i}s`}
      </option>
    );
  }

  const selectYears = [];
  for (let i = 0; i <= 9; i++) {
    let year = `${decade[0]}${decade[1]}${decade[2]}${i}`;
    selectYears.push(
      <option value={year} key={year} id="year">
        {year}
      </option>
    );
  }

  const handleGenreChange = (e) => {
    props.setGenre(e.target.value);
    const name = genres.filter((item) => item.id.toString() === e.target.value);
    props.setGenreName(name[0].name);
  };

  const handleRandomChoice = () => {
    props.setYear(1900 + Math.floor(Math.random() * 123));
    const randomGenreIndex = Math.floor(Math.random() * 19);
    props.setGenre(genres[randomGenreIndex].id);
    props.setGenreName(genres[randomGenreIndex].name);
    return navigate("/result");
  };

  const handleClick = () => {
    return navigate("/result");
  };

  return (
    <div className={`home-main form-test ${props.isOpen && "hidden"}`}>
      <h1>Begin your search!</h1>

      <label htmlFor="genre">Select a Genre:</label>
      <select
        id="genre"
        className="form-input genre"
        onChange={(e) => handleGenreChange(e)}
      >
        {selectGenres}
      </select>
      <div className="year-and-decade">
        <select
          id="decade"
          className="form-input year-2"
          onChange={(e) => setDecade(e.target.value)}
        >
          {selectDecades}
        </select>
        <select
          id="year"
          className="form-input year-1"
          onChange={(e) => props.setYear(e.target.value)}
        >
          {selectYears}
        </select>
      </div>

      <button className="btn btn-input" onClick={handleClick}>
        TOP 3 IMDB <FaArrowRight className="arrow-icon" />
      </button>
      <button
        className="btn-no-background btn-input"
        onClick={handleRandomChoice}
      >
        ...or surprise me! <FaArrowRight className="arrow-icon" />
      </button>
    </div>
  );
};

export default Form;
