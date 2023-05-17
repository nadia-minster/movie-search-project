import { useGlobalContext } from "../../context";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const SaveMovieButton = ({ movie }) => {
  const [icon, setIcon] = useState(<FaHeart />);
  const { setSavedMovie, savedMovie } = useGlobalContext();
  const handleSave = () => {
    if (!savedMovie.some((saved) => saved.title === movie.title)) {
      setSavedMovie([...savedMovie, movie]);
      setIcon(<FaCheck />);
    }
  };

  useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovie));
  }, [savedMovie]);

  return (
    <button className="btn btn-result" onClick={handleSave}>
      Save {icon}
    </button>
  );
};

export default SaveMovieButton;
