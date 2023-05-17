import useGetMovie from "../hooks/useGetMovie";
import { useGlobalContext } from "../context";
import MovieCard from "./MovieCard";
import SkeletonLoad from "./SkeletonLoad";

const SearchResult = () => {
  const { year, genre, genreName } = useGlobalContext();
  const { movies, loading } = useGetMovie(year, genre);
  const resultMovies = movies.slice(0, 3);
  console.log(loading);

  return (
    <div className="container-page">
      <div className="result-heading">
        <h2>{`Here are TOP 3 ${genreName} movies from ${year}.`}</h2>
        <h3>
          Discover best rated movies of your chosen genre. You can save them to
          access them later.
        </h3>
      </div>
      {loading
        ? Array(3).map(() => <SkeletonLoad />)
        : resultMovies?.map((movie) => {
            return <MovieCard movie={movie} key={movie.title} button="save" />;
          })}
    </div>
  );
};

export default SearchResult;
