import logo from "../assets/images/tmdblogo.svg";

const About = () => {
  return (
    <div className="about-page">
      <div className="result-heading">
        <h2>Thank for checking out my project!</h2>
      </div>
      <div className="about-text">
        <p>
          Like many people, I find it very hard to pick a movie, wasting so much
          time looking for the right one, that eventually it is too late to
          watch anything. This is why I decided to limit the options, giving
          users only three movies to choose from.
        </p>
        <p>
          There's an option to choose random three movies, which very fun, and I
          found many great movies using this feature. You can save movies to
          watch them later and keep track of the movies you have already watched
          as well as rate them.
        </p>
      </div>

      <img src={logo} alt="the movie data base" className="tmdb-logo" />
    </div>
  );
};

export default About;
