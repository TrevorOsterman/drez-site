import React from "react";
import "./Services.css";

const Calendly = () => {
  return (
    <div style={{ height: "800px" }}>
      <iframe
        src="https://calendly.com/trevormosterman"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default function Services() {
  return <div className="services">
      <h1 className="comp-header">Services</h1>
      <Calendly />
  </div>;
}
