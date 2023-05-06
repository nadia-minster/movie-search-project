import axios from "axios";
import { useState, useEffect } from "react";

const useGetMovies = (year, genre) => {
  const [movies, setMovies] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      console.log(year, genre);
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&primary_release_year=${year}&with_genres=${genre}`
      );
      setMovies(response.data.results);
    };

    fetchMovies();
  }, [year, genre]);

  return movies;
};

export default useGetMovies;
