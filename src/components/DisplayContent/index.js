// Plan
// render the content of image and text
// import react and export the components
// make the function that takes in URL and text, returns the display content

import React from "react";

function DisplayContent({ imageUrl }) {
  return (
    <section>
      <img src={imageUrl} alt="cat" />
      <h3>Here is the cat</h3>
    </section>
  );
}

export default DisplayContent;
