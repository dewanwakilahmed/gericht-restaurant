import React from "react";

// CSS
import "./App.css";

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
