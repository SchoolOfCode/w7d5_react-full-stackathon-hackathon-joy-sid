// Plan
// render the button
// import react and export the components
// make the function that takes in the onClick function
// in App component, write the onClick function.

import React from "react";

function Button({ onClick }) {
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      Click for new cat and cocktail
    </button>
  );
}

export default Button;
