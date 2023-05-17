import { useState, useEffect } from "react";

const RatingButtons = ({ movie }) => {
  const [rate, setRate] = useState();
  const rating = Array.from({ length: 10 }, (_, index) => index + 1);

  // useEffect(() => {
  //   localStorage.setItem("rate", JSON.stringify(rate));
  // }, [rate]);

  // useEffect(() => {
  //   const score = localStorage.getItem("rate");
  //   if (score) {
  //     setRate(JSON.parse(score));
  //   }
  // }, []);
  const handleRate = (e) => {
    setRate(e.target.value);
  };
  return (
    <div className="rating-buttons">
      {rating.map((score) => (
        <button
          value={score}
          key={score}
          className={`btn rating-btn ${
            rate !== undefined && rate !== score && "btn-disabled"
          } ${rate == score && "selected-btn"}`}
          onClick={(e) => handleRate(e)}
        >
          {score}
        </button>
      ))}
    </div>
  );
};

export default RatingButtons;