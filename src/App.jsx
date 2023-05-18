import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SharedLayout from "./Components/SharedLayout";
import SearchResult from "./Components/SearchResult";
import SavedMovies from "./Components/SavedMovies";
import Watched from "./Components/Watched";
import About from "./Components/About";
import "./style/index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="result" element={<SearchResult />} />
        <Route path="saved" element={<SavedMovies />} />
        <Route path="watched" element={<Watched />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
