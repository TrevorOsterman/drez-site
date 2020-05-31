import React from "react";
import Services from "./Services/Services";
import "./App.css";
import Nav from "./Nav/Nav.js";
import Hero from "./Hero/Hero.js";
import About from "./About/About.js";
import Contact from "./Contact/Contact";

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
      </div>
    </div>
  );
}

export default App;
