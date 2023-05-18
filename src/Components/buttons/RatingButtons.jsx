import { useState, useEffect } from "react";
import { useGlobalContext } from "../../context";

const RatingButtons = ({ movie }) => {
  const { watched, setWatched } = useGlobalContext();
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  useEffect(() => {
    console.log(ratings);
    const [movieWithMyRating] = watched.filter(
      (movie) => movie.title === ratings.title
    );
    if (movieWithMyRating) {
      movieWithMyRating.myRating = ratings.rating;
      const unratedMovies = watched.filter(
        (movie) => movie.title !== movieWithMyRating.title
      );
      setWatched([...unratedMovies, movieWithMyRating]);
    }
  }, [ratings]);

  const handleRate = (e) => {
    const { value } = e.target;
    setRatings({ title: movie.title, rating: parseInt(value) });
  };

  const getMovieRating = () => {
    return movie.myRating ? movie.myRating : 0;
  };

  const rating = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="rating-buttons">
      {rating.map((score) => (
        <button
          value={score}
          key={score}
          className={`btn rating-btn ${
            score !== getMovieRating() && "btn-disabled"
          } ${score === getMovieRating() && "selected-btn"}`}
          onClick={(e) => handleRate(e)}
        >
          {score}
        </button>
      ))}
    </div>
  );
};

export default RatingButtons;
