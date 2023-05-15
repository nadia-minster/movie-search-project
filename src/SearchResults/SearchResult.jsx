import React from "react";
import useGetMovie from "../hooks/useGetMovie";
import { FaHeart } from "react-icons/fa";

const SearchResult = (props) => {
  const { movies, loading } = useGetMovie(props.year, props.genre);
  const resultMovies = movies.slice(0, 3);
  console.log(loading);
  const imagePath = "https://image.tmdb.org/t/p/original";

  const skeleton = {};

  return (
    <div className="result-page">
      <div className="result-heading">
        <h2>{`Here are TOP 3 ${props.genreName} movies from ${props.year}.`}</h2>
        <h3>
          Discover best rated movies of your chosen genre. You can save them to
          access them later.
        </h3>
      </div>

      {resultMovies?.map((movie) => {
        return (
          <div className="single-movie" key={movie.title}>
            <img
              className="backdrop"
              alt={movie.title}
              src={`${imagePath}${movie.backdrop_path}`}
            />
            <img
              className="movie-poster"
              src={`${imagePath}${movie.poster_path}`}
            />
            <div className="single-movie-text">
              <h5>IMDB rating: {movie.vote_average}</h5>
              <h4>{movie.title}</h4>
              <p className="single-movie-p">{movie.overview}</p>
            </div>
            <button
              className="btn btn-result"
              onClick={() => props.setSavedMovie([...props.savedMovie, movie])}
            >
              Save <FaHeart className="heart-icon" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;
