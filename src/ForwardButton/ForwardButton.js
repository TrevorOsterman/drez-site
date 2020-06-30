import React from "react";
import "./ForwardButton.css";

export default function ForwardButton() {
  return (
    <button
      className="forward-button"
      style={{ height: `100px`, width: `100px` }}
      onClick={() => {
        console.log(window.location.hash);
      }}
    >
      >
    </button>
  );
}
