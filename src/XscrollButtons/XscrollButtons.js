import React from "react";
import "./XscrollButtons.css";

const paths = [`#about`, `#services`, `#contact`];

export default function XscrollButtons() {
  return (
    <>
      <button
        className="forward-button"
        onClick={() => {
          for (let i = 0; i < paths.length; i++) {
            if (window.location.hash === paths[paths.length - 1]) {
              break;
            }
            if (
              window.location.hash === paths[i] ||
              window.location.hash === ""
            ) {
              window.location.hash = paths[i + 1];
              break;
            }
          }
        }}
      >
        &gt;
      </button>
      <button
        className="back-button"
        style={{ height: `100px`, width: `100px` }}
        onClick={() => {
          for (let i = 0; i < paths.length; i++) {
            if (
              window.location.hash === paths[0] ||
              window.location.hash === ``
            ) {
              break;
            }
            if (paths[i] === window.location.hash) {
              window.location.hash = paths[i - 1];
              break;
            }
          }
        }}
      >
        fuck
      </button>
    </>
  );
}
