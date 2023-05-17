import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [year, setYear] = useState("2023");
  const [genre, setGenre] = useState(36);
  const [genreName, setGenreName] = useState("Action");
  const [isOpen, setIsOpen] = useState(false);
  const [savedMovie, setSavedMovie] = useState([]);

  useEffect(() => {
    const savedMovies = localStorage.getItem("savedMovies");
    if (savedMovies) {
      setSavedMovie(JSON.parse(savedMovies));
    }
  }, []);

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
