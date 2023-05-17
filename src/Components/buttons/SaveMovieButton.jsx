import { useGlobalContext } from "../../context";
import { useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const SaveMovieButton = ({ movie }) => {
  const { setSavedMovie, savedMovie } = useGlobalContext();

  useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovie));
  }, [savedMovie]);

  return (
    <button
      className="btn btn-result"
      onClick={() => setSavedMovie([...savedMovie, movie])}
    >
      Save <FaHeart />
    </button>
  );
};

export default SaveMovieButton;
