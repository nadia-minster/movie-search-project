import React, { useState } from "react";
import HomeCTA from "./HomeCTA";
import Form from "./Form";

const Home = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <div className="main">
      {!isSearchActive ? (
        <HomeCTA setIsSearchActive={setIsSearchActive} />
      ) : (
        <Form />
      )}
    </div>
  );
};

export default Home;
