import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../Header/Hero";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>College | Home</title>
      </Helmet>
      <Hero/>
    </div>
  );
};

export default Home;
