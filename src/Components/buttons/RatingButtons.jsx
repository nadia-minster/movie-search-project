import { useState } from "react";

const RatingButtons = () => {
  const [rate, setRate] = useState();
  const rating = Array.from({ length: 10 }, (_, index) => index + 1);

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
