import React from "react";

// CSS Module
import classes from "./App.css";

// Containers
import {
  Header,
  Intro,
  AboutUs,
  SpecialMenu,
  Chef,
  Laurels,
  Gallery,
  FindUs,
  Footer,
} from "./containers";

// Components
import { Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Intro />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;
