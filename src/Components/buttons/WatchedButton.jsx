import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "../../context";

const WatchedButton = ({ movie }) => {
  const { setWatched, watched } = useGlobalContext();
  const navigate = useNavigate();

  const handleWatched = () => {
    setWatched([...watched, movie]);
    navigate("/watched");
  };

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  return (
    <button className="btn btn-result" onClick={handleWatched}>
      Watched
      <FaEye />
    </button>
  );
};

export default WatchedButton;
