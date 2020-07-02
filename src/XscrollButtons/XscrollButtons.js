import React from "react";
import "./XscrollButtons.css";

const paths = [`#about`, `#services`, `#contact`];

export default function XscrollButtons() {
  return (
    <button
      className="forward-button"
      style={{ height: `100px`, width: `100px` }}
      onClick={() => {
        if (!window.location.hash) {
          window.location.hash = paths[1];
        } else {
          for (let i = 0; i < paths.length; i++) {
            if (
              paths[i] === window.location.hash &&
              paths[i] !== paths[paths.length - 1]
            ) {
              console.log(paths[i++]);
              window.location.hash = paths[i++];
            }
          }
        }
      }}
    >
      &gt;
    </button>
  );
}
