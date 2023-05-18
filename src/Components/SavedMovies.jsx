import { useGlobalContext } from "../context";
import Pagination from "./Pagination";
const SavedMovies = () => {
  const { savedMovie } = useGlobalContext();
  const heading = "Saved Movies";
  const subheading =
    "Discover best-rated movies of your chosen genre. You can save them to access them later.";
  return (
    <Pagination
      movies={savedMovie}
      heading={heading}
      subheading={subheading}
      button={"watch-or-delete"}
    />
  );
};

export default SavedMovies;
