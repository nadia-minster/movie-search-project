import { useState, useEffect } from "react";
import SkeletonLoad from "./SkeletonLoad";
import SaveMovieButton from "./buttons/SaveMovieButton";
import DeleteButton from "./buttons/DeleteButton";
import WatchedButton from "./buttons/WatchedButton";
import RatingButtons from "./buttons/RatingButtons";

const MovieCard = ({ movie, button }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const imagePath = "https://image.tmdb.org/t/p/original";
  console.log(movie);

  let displayButton = null;
  if (button === "save") {
    displayButton = <SaveMovieButton movie={movie} />;
  } else if (button === "rating") {
    displayButton = <RatingButtons movie={movie} />;
  } else if (button === "watch-or-delete") {
    displayButton = (
      <div className="watch-delete-buttons">
        <WatchedButton movie={movie} />
        <DeleteButton movie={movie} />
      </div>
    );
  }

  useEffect(() => {
    const backdropImage = new Image();
    backdropImage.src = `${imagePath}${movie.backdrop_path}`;
    backdropImage.onload = () => {
      setImageLoading(false);
    };

    const posterImage = new Image();
    posterImage.src = `${imagePath}${movie.poster_path}`;
    posterImage.onload = () => {
      setImageLoading(false);
    };
  }, [imagePath, movie.backdrop_path, movie.poster_path]);

  const renderContent = () => {
    if (imageLoading) {
      return <SkeletonLoad />;
    }

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

        <div className="info">
          <h5>IMDB rating: {movie.vote_average}</h5>
          <h5>Release date: {movie.release_date}</h5>
          <h3 className="movie-title">{movie.title}</h3>
        </div>

        <div className="single-movie-text">
          <p className="single-movie-p">{movie.overview}</p>
          <div className="buttons">{displayButton}</div>
        </div>
      </div>
    );
  };

  return renderContent();
};

export default MovieCard;
