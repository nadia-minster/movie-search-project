import { useGlobalContext } from "../../context";
import { FaTrash } from "react-icons/fa";

const DeleteButton = ({ movie }) => {
  const { setSavedMovie, savedMovie } = useGlobalContext();
  const handleDelete = () => {
    const newMovies = savedMovie.filter((savedMovie) => savedMovie !== movie);
    setSavedMovie(newMovies);
  };

  return (
    <button className="btn btn-result" onClick={handleDelete}>
      Delete <FaTrash />
    </button>
  );
};

export default DeleteButton;
