import useGetMovie from "../hooks/useGetMovie";
import { useGlobalContext } from "../context";
import MovieCard from "./MovieCard";
import SkeletonLoad from "./SkeletonLoad";
import { FaRedo } from "react-icons/fa";
const SearchResult = () => {
  const { year, genre, genreName, handleRandomChoice } = useGlobalContext();
  const { movies, loading } = useGetMovie(year, genre);

  const resultMovies = movies.slice(0, 3);

  return (
    <div className="container-page">
      {!loading && movies.length === 0 ? (
        <div className="no-movies">
          <h2>No Movies to display</h2>
          <button className="btn">Try Again</button>
        </div>
      ) : (
        <div className="result-heading">
          <h2>{`Here are TOP 3 ${genreName} movies from ${year}.`}</h2>
          <div className="result-secondary-heading">
            <h3>
              Discover best rated movies of your chosen genre. You can save them
              to access them later.
            </h3>
            <button className="btn btn-refresh" onClick={handleRandomChoice}>
              Refresh <FaRedo />
            </button>
          </div>
        </div>
      )}
      {loading
        ? Array(3).map(() => <SkeletonLoad />)
        : resultMovies?.map((movie) => {
            return <MovieCard movie={movie} key={movie.title} button="save" />;
          })}
    </div>
  );
};

export default SearchResult;
