import React from "react";
import useGetMovie from "../hooks/useGetMovie";

const SearchResult = (props) => {
  const movies = useGetMovie(props.year, props.genre).slice(0, 3);
  console.log(movies);
  const imagePath = "https://image.tmdb.org/t/p/original";
  console.log(movies);
  return (
    <div className="result-page">
      <div className="result-heading">
        <h2>{`Here are TOP 3 ${props.genreName} movies from ${props.year}.`}</h2>
        <h3>
          Discover best rated movies of your chosen genre. You can save them to
          access them later.
        </h3>
      </div>

      {movies?.map((movie) => {
        console.log(movie);
        return (
          <div className="single-movie">
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
              <h5>{movie.vote_average}</h5>
              <h4>{movie.title}</h4>
              <p className="single-movie-p">{movie.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;
