import { FaEye } from "react-icons/fa";
import { useEffect } from "react";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";

const WatchedButton = ({ movie }) => {
  const { setWatched, watched } = useGlobalContext();

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  const handleWatched = () => {
    setWatched([...watched, movie]);
    localStorage.setItem("watched", JSON.stringify([...watched, movie]));

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
