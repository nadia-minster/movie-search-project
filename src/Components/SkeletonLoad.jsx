const SkeletonLoad = () => {
  const placeholders = Array.from({ length: 4 }, (_, index) => index + 1);
  return (
    <div className="single-movie single-movie-placeholder">
      <div className="placeholder poster-placeholder" />
      <div className="placeholder-text">
        <div className="placeholder rating-placeholder"></div>
        <h4 className="placeholder  title-placeholder-main"></h4>

        <div className="description-placeholder">
          {placeholders.map((placeholder) => (
            <div
              className={`placeholder title-placeholder title-placeholder-${placeholder}`}
              key={placeholder}
            ></div>
          ))}
          <div className="placeholder button-placeholder"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoad;
