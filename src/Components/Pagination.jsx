import { useState } from "react";
import MovieCard from "./MovieCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Pagination = ({ movies, heading, subheading, button }) => {
  const moviesPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  let sortedMovies = movies.sort((a, b) => {
    if (a.myRating && !b.myRating) {
      return 1;
    } else if (!a.myRating && b.myRating) {
      return -1;
    } else {
      return b.myRating - a.myRating;
    }
  });
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = sortedMovies?.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );
  const totalPages = Math.ceil(movies?.length / moviesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDirections = (direction) => {
    if (direction === "left") {
      if (currentPage === 1) {
        setCurrentPage(totalPages);
      } else setCurrentPage(currentPage - 1);
    }
    if (direction === "right") {
      if (currentPage === totalPages) {
        setCurrentPage(1);
      } else setCurrentPage(currentPage + 1);
    }
  };

  if (sortedMovies.length === 0) {
    return (
      <div className="container-page">
        <div className="result-heading" style={{ "margin-top": 200 }}>
          <h2>You haven't saved any movies yet</h2>
          <h3>Check out our search, and find your perfect movie</h3>
        </div>
        <Link to="/" className="btn btn-result" style={{ "margin-top": 36 }}>
          Home
        </Link>
        <div></div>
      </div>
    );
  }

  return (
    <div className="container-page">
      <div className="result-heading">
        <h2>{heading}</h2>
        <h3>{subheading}</h3>
      </div>

      {currentMovies?.map((movie) => (
        <MovieCard movie={movie} key={movie.title} button={button} />
      ))}

      <div className="pagination">
        <button
          className="btn btn-page"
          onClick={() => handleDirections("left")}
        >
          <FaChevronLeft />
        </button>
        <div className="pages">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={
                  pageNumber === currentPage ? "page page-active" : "page"
                }
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
        <button
          className="btn btn-page"
          onClick={() => handleDirections("right")}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
