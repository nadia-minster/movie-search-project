import React, { useState } from "react";
import { useGlobalContext } from "../context";
import HomeCTA from "./HomeCTA";
import Form from "./Form";

const Home = () => {
  const { setYear, setGenre, setGenreName, isOpen } = useGlobalContext();
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <div className="main home-main">
      {!isSearchActive ? (
        <HomeCTA setIsSearchActive={setIsSearchActive} isOpen={isOpen} />
      ) : (
        <Form
          setYear={setYear}
          setGenre={setGenre}
          setGenreName={setGenreName}
          isOpen={isOpen}
        />
      )}
    </div>
  );
};

export default Home;
