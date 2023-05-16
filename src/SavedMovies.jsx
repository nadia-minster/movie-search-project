import React from "react";
import { useGlobalContext } from "./context";
import MovieCard from "./MovieCard";

const SavedMovies = () => {
  const { savedMovie } = useGlobalContext();
  const savedMovies = savedMovie?.map((movie) => {
    return <MovieCard movie={movie} key={movie.title} />;
  });

  return (
    <div className="result-page">
      <div className="result-heading">
        <h2>Saved Movies</h2>
        <h3>
          Discover best rated movies of your chosen genre. You can save them to
          access them later.
        </h3>
      </div>
      {savedMovies}
    </div>
  );
};

export default SavedMovies;
