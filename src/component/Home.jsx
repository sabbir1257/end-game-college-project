import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../Header/Hero";
import Gallry from "./Gallry";
import Marque from "./Marque";
import HomeCollege from "./HomeCollege";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>College | Home</title>
      </Helmet>
      <Hero/>
        <HomeCollege/>
      <Gallry/>
      <Marque/>
    </div>
  );
};

export default Home;
