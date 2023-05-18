import { useState } from "react";
import MovieCard from "./MovieCard";

const Pagination = ({ movies, heading, subheading, button }) => {
  const moviesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies?.slice(indexOfFirstMovie, indexOfLastMovie);
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
          PREV
        </button>
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
        <button
          className="btn btn-page"
          onClick={() => handleDirections("right")}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Pagination;
