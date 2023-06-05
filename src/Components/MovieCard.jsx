import { useState, useEffect } from "react";
import SkeletonLoad from "./SkeletonLoad";
import NoPoster from "./NoPoster";
import SaveMovieButton from "./buttons/SaveMovieButton";
import DeleteButton from "./buttons/DeleteButton";
import WatchedButton from "./buttons/WatchedButton";
import RatingButtons from "./buttons/RatingButtons";
import DeleteWatched from "./buttons/DeleteWatched";
import { useMediaQuery } from "react-responsive";

const MovieCard = ({ movie, button }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const imagePath = "https://image.tmdb.org/t/p/original";

  let displayButton = null;
  if (button === "save") {
    displayButton = <SaveMovieButton movie={movie} />;
  } else if (button === "rating") {
    displayButton = (
      <div className="rate-delete">
        <RatingButtons movie={movie} />
        <DeleteWatched movie={movie} />
      </div>
    );
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
    backdropImage.onerror = () => {
      setLoadingError(true);
    };

    const posterImage = new Image();
    posterImage.src = `${imagePath}${movie.poster_path}`;
    posterImage.onload = () => {
      setImageLoading(false);
    };
    posterImage.onerror = () => {
      setLoadingError(true);
    };
  }, [imagePath, movie.backdrop_path, movie.poster_path]);

  const renderContent = () => {
    if (loadingError) {
      return <NoPoster movie={movie} displayButton={displayButton} />;
    }
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
        {!isMobile ? (
          <div className="single-movie-desktop">
            <img
              className="movie-poster"
              src={`${imagePath}${movie.poster_path}`}
            />
            <div className="poster-info">
              <div className="info">
                <h4>
                  Rating:
                  <span className="info-accent">{movie.vote_average}</span>
                </h4>
                <h4>
                  Release Year:
                  <span className="info-accent">
                    {movie.release_date.slice(0, 4)}
                  </span>
                </h4>
                <h3 className="movie-title">{movie.title}</h3>
              </div>

              <div className="single-movie-text">
                <p className="single-movie-p">{movie.overview}</p>
                <div className="buttons">{displayButton}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="single-movie-mobile">
            <div className="poster-info-mobile">
              <img
                className="movie-poster"
                src={`${imagePath}${movie.poster_path}`}
              />
              <div className="info">
                <h4>
                  Rating:
                  <span className="info-accent">{movie.vote_average}</span>
                </h4>
                <h4>
                  Release Year:
                  <span className="info-accent">
                    {movie.release_date.slice(0, 4)}
                  </span>
                </h4>
                <h3 className="movie-title">{movie.title}</h3>
                <div className="buttons">{displayButton}</div>
              </div>
            </div>

            <div className="single-movie-text">
              <p className="single-movie-p">{movie.overview}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return renderContent();
};

export default MovieCard;
