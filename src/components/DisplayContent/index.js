// Plan
// render the content of image and text
// import react and export the components
// make the function that takes in URL and text, returns the display content

import React from "react";
import "./index.css";

function DisplayContent({ imageUrl, altText, text }) {
  return (
    <section className="info">
      <img
        className="image"
        src={imageUrl}
        alt={altText}
        style={{
          display: "flex",
          flexDirection: "row",

          justifyContent: "center",
        }}
      />
      <h3>{text}</h3>
    </section>
  );
}

export default DisplayContent;
