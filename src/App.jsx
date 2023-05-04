import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import SharedLayout from "./SharedLayout";
import SearchResult from "./SearchResults/SearchResult";
import "./index.css";

function App() {
  const [year, setYear] = useState(2023);
  const [genre, setGenre] = useState(1);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home setYear={setYear} setGene={setGenre} />} />
        <Route
          path="result"
          element={<SearchResult year={year} genre={genre} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
