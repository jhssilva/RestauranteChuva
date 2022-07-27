import React from "react";
import Navbar from "./Home/Navbar";
import Slide from "./Home/Slide";
import History from "./Home/History";
import Menu from "./Home/Menu";
import Gallery from "./Home/Gallery";
import Events from "./Home/Events";
import Contact from "./Home/Contact";
import Map from "./Home/Map";
import Copyright from "./Home/Copyright";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slide />
      <History />
      <Menu />
      <Gallery />
      <Events />
      <Contact />
      <Map />
      <Copyright />
    </div>
  );
};

export default Home;
