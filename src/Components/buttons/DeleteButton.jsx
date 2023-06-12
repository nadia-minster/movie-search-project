import { useGlobalContext } from "../../context";
import { FaTrash } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const DeleteButton = ({ movie }) => {
  const { setSavedMovie, savedMovie } = useGlobalContext();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleDelete = () => {
    const newMovies = savedMovie.filter((savedMovie) => savedMovie !== movie);
    setSavedMovie(newMovies);
  };

  return (
    <button
      className={`btn btn-result ${isMobile && "mobile-btn-result"}`}
      onClick={handleDelete}
    >
      {!isMobile && "Delete"} <FaTrash />
    </button>
  );
};

export default DeleteButton;
