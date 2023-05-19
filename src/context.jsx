import { createContext, useContext, useState, useEffect } from "react";
import useGetGenre from "./hooks/useGetGenre";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [year, setYear] = useState("2023");
  const [genre, setGenre] = useState(36);
  const [genreName, setGenreName] = useState("Action");
  const [isOpen, setIsOpen] = useState(false);
  const [savedMovie, setSavedMovie] = useState([]);
  const [watched, setWatched] = useState([]);
  const { genres } = useGetGenre();

  const navigate = useNavigate();

  useEffect(() => {
    const savedMovies = localStorage.getItem("savedMovies");
    const watchedMovies = localStorage.getItem("watched");
    if (savedMovies) {
      setSavedMovie(JSON.parse(savedMovies));
    }
    if (watchedMovies) {
      setWatched(JSON.parse(watchedMovies));
    }
  }, []);

  const handleRandomChoice = () => {
    setYear(1900 + Math.floor(Math.random() * 123));
    const randomGenreIndex = Math.floor(Math.random() * 19);
    setGenre(genres[randomGenreIndex].id);
    setGenreName(genres[randomGenreIndex].name);
    return navigate("/result");
  };

  return (
    <GlobalContext.Provider
      value={{
        year,
        setYear,
        genre,
        setGenre,
        genreName,
        setGenreName,
        isOpen,
        setIsOpen,
        savedMovie,
        setSavedMovie,
        watched,
        setWatched,
        handleRandomChoice,
        genres,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
