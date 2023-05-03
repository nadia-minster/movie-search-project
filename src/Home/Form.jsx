import React from "react";
import useGetGenre from "../hooks/useGetGenre";
import { FaArrowRight } from "react-icons/fa";

const Form = () => {
  const genres = useGetGenre();
  const selectGenres = genres?.map((genre) => {
    return (
      <option value={genre.name} key={genre.id}>
        {genre.name}
      </option>
    );
  });
  console.log(selectGenres);
  return (
    <div className="home-main form-test">
      <h1>Begin your search!</h1>
      <label htmlFor="year">Enter a Year:</label>
      <input type="text" className="form-input" />
      <label htmlFor="genre">Select a Genre:</label>
      <select id="genre" className="form-input">
        {genres && selectGenres}
      </select>
      <button className="btn form-input">
        TOP 3 IMDB <FaArrowRight className="arrow-icon" />
      </button>
    </div>
  );
};

export default Form;
