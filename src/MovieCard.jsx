import { useGlobalContext } from "./context";
import { FaHeart } from "react-icons/fa";
import uniqid from "uniqid";

const MovieCard = ({ movie }) => {
  const { setSavedMovie, savedMovie } = useGlobalContext();
  const imagePath = "https://image.tmdb.org/t/p/original";

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
      </div>
      <button
        className="btn btn-result"
        onClick={() => setSavedMovie([...savedMovie, movie])}
      >
        Save <FaHeart className="heart-icon" />
      </button>
    </div>
  );
};

export default MovieCard;
