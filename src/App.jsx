import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import SharedLayout from "./SharedLayout";
import SearchResult from "./SearchResults/SearchResult";
import "./index.css";

function App() {
  const [year, setYear] = useState("2023");
  const [genre, setGenre] = useState(36);
  const [genreName, setGenreName] = useState();

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <Home
              setYear={setYear}
              setGenre={setGenre}
              setGenreName={setGenreName}
            />
          }
        />
        <Route
          path="result"
          element={
            <SearchResult year={year} genre={genre} genreName={genreName} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
