import { FaEye } from "react-icons/fa";
import { useEffect } from "react";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";

const WatchedButton = ({ movie }) => {
  const { setWatched, watched, setSavedMovie, savedMovie } = useGlobalContext();

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovie));
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  const handleWatched = () => {
    setWatched([...watched, movie]);
    localStorage.setItem("watched", JSON.stringify([...watched, movie]));
    setSavedMovie(savedMovie.filter((saved) => saved !== movie));
    setTimeout(() => {
      navigate("/watched");
    }, 0);
  };

  return (
    <button className="btn btn-result" onClick={handleWatched}>
      Watched
      <FaEye />
    </button>
  );
};

export default WatchedButton;
