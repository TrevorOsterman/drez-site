import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-info">
        <h1 className="hero-header">Dresden Osterman</h1>
        <h2 className="hero-byline">Certified Reiki Specialist</h2>
      </div>
      <div
        className="img-placeholder"
        style={{ height: "200px", width: "200px", border: "3px dashed black" }}
      >
        YOUR PHOTO HERE
      </div>
    </div>
  );
}
