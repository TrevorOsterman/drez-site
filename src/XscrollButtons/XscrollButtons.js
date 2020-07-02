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
            console.log(paths[i]);
            console.log(window.location.hash);
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
          if (!window.location.hash) {
            window.location.hash = ``;
          } else {
            for (let i = 0; i < paths.length; i++) {
              if (paths[i] === window.location.hash) {
                console.log(paths[i++]);
                window.location.hash = paths[i--];
              }
            }
          }
        }}
      >
        fuck
      </button>
    </>
  );
}
