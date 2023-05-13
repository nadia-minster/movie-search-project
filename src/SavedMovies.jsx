import React from "react";

const SavedMovies = (props) => {
  console.log(props.savedMovie);
  return (
    <div className="result-page">
      <div className="result-heading">
        <h2>Saved Movies</h2>
        <h3>
          Discover best rated movies of your chosen genre. You can save them to
          access them later.
        </h3>
      </div>
    </div>
  );
};

export default SavedMovies;
