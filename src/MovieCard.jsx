import { useGlobalContext } from "./context";
import { FaHeart } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const MovieCard = ({ movie, button }) => {
  const { setSavedMovie, savedMovie } = useGlobalContext();
  const imagePath = "https://image.tmdb.org/t/p/original";

  const handleDelete = () => {
    const newMovies = savedMovie.filter((savedMovie) => savedMovie !== movie);
    setSavedMovie(newMovies);
  };

  return (
    <div className="single-movie">
      <img
        className="backdrop"
        alt={movie.title}
        src={`${imagePath}${movie.backdrop_path}`}
      />
      <img className="movie-poster" src={`${imagePath}${movie.poster_path}`} />
      <div className="single-movie-text">
        <h5>IMDB rating: {movie.vote_average}</h5>
        <h4>{movie.title}</h4>
        <p className="single-movie-p">{movie.overview}</p>
        <div className="buttons">
          {button === "save" ? (
            <button
              className="btn btn-result"
              onClick={() => setSavedMovie([...savedMovie, movie])}
            >
              Save <FaHeart />
            </button>
          ) : (
            <div>
              <button className="btn btn-result" onClick={handleDelete}>
                Delete <FaTrash />
              </button>
              <button className="btn btn-result">
                Watched <FaEye />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
