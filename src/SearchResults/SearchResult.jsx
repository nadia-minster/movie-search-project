import React from "react";
import useGetMovie from "../hooks/useGetMovie";

const SearchResult = (props) => {
  const movies = useGetMovie(props.year, props.genre).slice(0, 3);
  console.log(movies);
  const imagePath = "https://image.tmdb.org/t/p/original";
  console.log(movies);
  return (
    <div>
      <h2>{`Here are TOP 3 ${props.genreName} movies from ${props.year}.`}</h2>
      {movies?.map((movie) => {
        return (
          <div className="single-movie">
            <img
              className="movie-poster"
              src={`${imagePath}${movie.poster_path}`}
            />
            <div className="single-movie-text">
              <h4>{movie.original_title}</h4>
              <p className="single-movie-p">{movie.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;
