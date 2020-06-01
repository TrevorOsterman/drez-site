import React from "react";
import "./Services.css";

const Calendly = () => {
  return (
    <div id="calendar" style={{ height: "50vh" }}>
      <iframe
        src="https://calendly.com/dresdenosterman"
        width="80%"
        height="80%"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default function Services() {
  return (
    <div className="services card">
      <h1 className="comp-header">Services</h1>
      <Calendly />
    </div>
  );
}
