import { useGlobalContext } from "../../context";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const SaveMovieButton = ({ movie }) => {
  const [icon, setIcon] = useState(<FaHeart className="button-icon" />);
  const { setSavedMovie, savedMovie } = useGlobalContext();
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
    <button
      className={`btn btn-result ${isMobile && "mobile-btn-result"}`}
      onClick={handleSave}
    >
      {!isMobile && "Save"} {icon}
    </button>
  );
};

export default SaveMovieButton;
