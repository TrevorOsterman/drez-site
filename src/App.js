import React from "react";
import {Route} from 'react-router-dom';
import Services from './Services/Services'
import "./App.css";
import Nav from "./Nav/Nav.js";
import Hero from './Hero/Hero.js'
import About from './About/About.js'
import Contact from './Contact/Contact'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path exact="/" component={Hero} />
      <Route path exact="/" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services}/>
    </div>
  )
}

export default App;
