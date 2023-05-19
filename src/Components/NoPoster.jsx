const NoPoster = ({ movie, displayButton }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div className="single-movie">
      <img
        className="backdrop"
        alt={movie.title}
        src={`${imagePath}/g67r1eiQD3ERSEQFCFkSn7TeGw5.jpg`}
      />
      <div className="poster-info">
        <img
          className="movie-poster"
          src={`https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available-737x1024.jpg`}
        />
        <div className="info">
          <h4>
            Rating: <span className="info-accent">{movie.vote_average}</span>
          </h4>
          <h4>
            Release Year:
            <span className="info-accent">
              {movie.release_date.slice(0, 4)}
            </span>
          </h4>
          <h3 className="movie-title">{movie.title}</h3>
        </div>
      </div>

      <div className="single-movie-text">
        <p className="single-movie-p">{movie.overview}</p>
        <div className="buttons">{displayButton}</div>
      </div>
    </div>
  );
};

export default NoPoster;
