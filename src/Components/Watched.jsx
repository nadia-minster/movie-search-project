import { useGlobalContext } from "../context";
import Pagination from "./Pagination";
const Watched = () => {
  const { watched } = useGlobalContext();
  const heading = "Rate Movies You Watched";
  const subheading = "Explore and rate the movies you watched.";
  return (
    <Pagination
      movies={watched}
      heading={heading}
      subheading={subheading}
      button={"rating"}
    />
  );
};

export default Watched;
