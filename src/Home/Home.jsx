import React, { useState } from "react";
import HomeCTA from "./HomeCTA";
import Form from "./Form";

const Home = (props) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <div className="main">
      {!isSearchActive ? (
        <HomeCTA setIsSearchActive={setIsSearchActive} />
      ) : (
        <Form
          setYear={props.setYear}
          setGenre={props.setGenre}
          setGenreName={props.setGenreName}
        />
      )}
    </div>
  );
};

export default Home;
