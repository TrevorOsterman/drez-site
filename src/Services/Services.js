import React, { useState } from "react";
import "./Services.css";

export default function Services() {
  const [calView, setCalView] = useState(false);

  const Calendly = () => {
    return (
      <div id="calendar">
        <iframe
          src="https://calendly.com/dresdenosterman"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
        <a
          id="close-button"
          onClick={() => {
            setCalView(false);
          }}
        >
          close
        </a>
      </div>
    );
  };

  return (
    <div id="services" className="services card">
      <h1 className="comp-header">Services</h1>
      <a
        id="launch-calendly"
        onClick={() => {
          setCalView(true);
        }}
      >
        Book Appointment
      </a>
      {calView && <Calendly />}
    </div>
  );
}
