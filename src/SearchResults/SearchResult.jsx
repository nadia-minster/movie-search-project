import React from "react";
import useGetMovie from "../hooks/useGetMovie";

const SearchResult = (props) => {
  const movies = useGetMovie(1978, 1).slice(0, 3);
  const imagePath = "https://image.tmdb.org/t/p/original";
  console.log(movies);
  return (
    <div>
      {movies?.map((movie) => {
        return (
          <div className="single-movie">
            <img
              className="movie-poster"
              src={`${imagePath}${movie.poster_path}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;
