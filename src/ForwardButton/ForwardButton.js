import React from "react";
import "./ForwardButton.css";

const paths = [`#about`, `#services`, `#contact`];

export default function ForwardButton() {
  return (
    <button
      className="forward-button"
      style={{ height: `100px`, width: `100px` }}
      onClick={() => {
        for (let i = 0; i < paths.length; i++) {
          if (
            paths[i] === window.location.hash &&
            paths[i] !== paths[paths.length - 1]
          ) {
            console.log(paths[i++]);
            window.location.hash = paths[i++];
          }
        }
      }}
    >
      >
    </button>
  );
}
