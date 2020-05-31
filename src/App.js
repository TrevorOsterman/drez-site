import React from "react";
import { Route } from "react-router-dom";
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
    </div>
  );
}

export default App;
