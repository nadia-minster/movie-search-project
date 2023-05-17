import { useGlobalContext } from "../context";
import MovieCard from "./MovieCard";
const Watched = () => {
  const { watched } = useGlobalContext();
  const displayWatched = watched?.map((movie) => {
    return <MovieCard movie={movie} key={movie.title} button={"rating"} />;
  });
  return <div className="container-page">{displayWatched}</div>;
};

export default Watched;
