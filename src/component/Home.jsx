import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../Header/Hero";
import Gallry from "./Gallry";
import Marque from "./Marque";
import HomeCollege from "./HomeCollege";
import Contact from "../Pages/Contact";
import Testimonial from "../Pages/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>College | Home</title>
      </Helmet>
      <Hero/>
      <HomeCollege/>
      <Gallry/>
      <Contact/>
      <Testimonial/>
      <Marque/>
    </div>
  );
};

export default Home;
