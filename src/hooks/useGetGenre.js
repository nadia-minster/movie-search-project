import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [genres, setGenres] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
      );
      setGenres(response.data.genres);
    };
    fetchGenres();
  }, []);
  return genres;
};

export default useFetch;
