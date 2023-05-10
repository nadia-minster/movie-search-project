import React, { useState } from "react";
import HomeCTA from "./HomeCTA";
import Form from "./Form";

const Home = (props) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <div className="main home-main">
      {!isSearchActive ? (
        <HomeCTA setIsSearchActive={setIsSearchActive} isOpen={props.isOpen} />
      ) : (
        <Form
          setYear={props.setYear}
          setGenre={props.setGenre}
          setGenreName={props.setGenreName}
          isOpen={props.isOpen}
        />
      )}
    </div>
  );
};

export default Home;
