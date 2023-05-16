import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import SharedLayout from "./SharedLayout";
import SearchResult from "./SearchResults/SearchResult";
import SavedMovies from "./SavedMovies";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="result" element={<SearchResult />} />
        <Route path="saved" element={<SavedMovies />} />
      </Route>
    </Routes>
  );
}

export default App;
