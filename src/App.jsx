import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SharedLayout from "./SharedLayout";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
