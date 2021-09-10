import "./App.css";
import DisplayContent from "../DisplayContent";
import React, { useState, useEffect } from "react";

function App() {
  const [catInfo, setCatInfo] = useState({ imageUrl: "", text: "" });
  const [id, setId] = useState(1);

  // function createRandomId() {
  //   // create a var and use the math.random to generate a random number and use math.floor to round off the number
  //   const id = Math.ceil(Math.random() * 11);
  //   setId(id);
  // }

  //declare a var called res and assign fetch request to it and add the id in template literals to generate results
  useEffect(() => {
    async function getCatInfo() {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search`
        // headers: { "x-api-key": "6fc37d97-3129-4518-b0fb-7dd863fb907c" },
      );

      //Have another var and parse res with json
      const data = await res.json();
      // Set Catinfo to data from data
      console.log(data);
      setCatInfo({ imageUrl: data.url, text: data.breeds.name });
    }
    getCatInfo();
  }, [id]);

  return (
    <div className="App">
      <DisplayContent imageUrl={catInfo.imageUrl} text={catInfo.text} />
    </div>
  );
}

export default App;
