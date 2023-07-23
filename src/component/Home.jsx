import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../Header/Hero";
import Gallry from "./Gallry";
import Marque from "./Marque";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>College | Home</title>
      </Helmet>
      <Hero/>
      <Gallry/>
      <Marque/>
    </div>
  );
};

export default Home;
