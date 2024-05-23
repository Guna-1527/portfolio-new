import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Project from "../components/Project";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-bg-dark">
        <Navbar />
        <Banner />
        <About />
        <Skills />
        <Project />
        <Contact />
    </div>
  );
};

export default Home;
