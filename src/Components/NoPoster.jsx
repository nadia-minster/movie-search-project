import { useMediaQuery } from "react-responsive";

const NoPoster = ({ movie, displayButton }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div className="single-movie">
      <img
        className="backdrop"
        alt={movie.title}
        src={`${imagePath}/g67r1eiQD3ERSEQFCFkSn7TeGw5.jpg`}
      />
      {!isMobile ? (
        <div className="single-movie-desktop">
          <img
            className="movie-poster"
            src={`https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available-737x1024.jpg`}
          />
          ;
          <div className="poster-info">
            <div className="info">
              <h4>
                Rating:
                <span className="info-accent">{movie.vote_average}</span>
              </h4>
              <h4>
                Release Year:
                <span className="info-accent">
                  {movie.release_date.slice(0, 4)}
                </span>
              </h4>
              <h3 className="movie-title">{movie.title}</h3>
            </div>

            <div className="single-movie-text">
              <p className="single-movie-p">{movie.overview}</p>
              <div className="buttons">{displayButton}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="single-movie-mobile">
          <div className="poster-info-mobile">
            <img
              className="movie-poster"
              src={`https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available-737x1024.jpg`}
            />
            ;
            <div className="info">
              <h4>
                Rating:
                <span className="info-accent">{movie.vote_average}</span>
              </h4>
              <h4>
                Release Year:
                <span className="info-accent">
                  {movie.release_date.slice(0, 4)}
                </span>
              </h4>
              <h3 className="movie-title">{movie.title}</h3>
              <div className="buttons">{displayButton}</div>
            </div>
          </div>

          <div className="single-movie-text">
            <p className="single-movie-p">{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoPoster;
