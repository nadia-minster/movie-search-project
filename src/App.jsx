import { Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Home from "./Components/Home/Home";
import SharedLayout from "./Components/SharedLayout";
import SearchResult from "./Components/SearchResult";
import SavedMovies from "./Components/SavedMovies";
import Watched from "./Components/Watched";
import About from "./Components/About";
import "./style/index.css";

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Movie Picker</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="./public/favicon_io/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="./public/favicon_io/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="./public/favicon_io/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Helmet>
      </HelmetProvider>

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="result" element={<SearchResult />} />
          <Route path="saved" element={<SavedMovies />} />
          <Route path="watched" element={<Watched />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
