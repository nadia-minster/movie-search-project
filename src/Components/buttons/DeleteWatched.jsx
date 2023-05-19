import { useGlobalContext } from "../../context";
import { FaTrash } from "react-icons/fa";

const DeleteButton = ({ movie }) => {
  const { setWatched, watched } = useGlobalContext();
  const handleDelete = () => {
    const newMovies = watched.filter((watched) => watched !== movie);
    setWatched(newMovies);
  };

  return (
    <button className="btn btn-delete-watched" onClick={handleDelete}>
      <FaTrash />
    </button>
  );
};

export default DeleteButton;
