import React from "react";
import Services from "./Services/Services";
import "./App.css";
import Nav from "./Nav/Nav.js";
import Hero from "./Hero/Hero.js";
import About from "./About/About.js";
import Contact from "./Contact/Contact";
import Ext from "./Ext/Ext";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Hero />
        <Nav />
      </div>
      <div className="x-scroll">
        <About />
        <Services />
        <Contact />
        <Ext />
      </div>
    </div>
  );
}

export default App;
