import "./App.css";
import DisplayContent from "../DisplayContent";
import React, { useState, useEffect } from "react";
import Button from "../Button";

function App() {
  const [catInfo, setCatInfo] = useState({ imageUrl: "" });
  const [cocktailInfo, setCocktailInfo] = useState({ imageUrl: "" });
  const [cocktailName, setCocktailName] = useState("");
  const [id, setId] = useState(1);

  /* function createRandomId() {
    // create a var and use the math.random to generate a random number and use math.floor to round off the number
    const id = Math.ceil(Math.random() * 11);
    setId(id);
  }*/

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
      setCatInfo({ imageUrl: data[0].url });
    }
    getCatInfo();
  }, [id]);

  useEffect(() => {
    async function getCocktailInfo() {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );

      const data = await res.json();
      console.log("data", data);
      // console.log("cocktails", data.drinks[0].strDrinkThumb);
      setCocktailInfo({ imageUrl: data.drinks[0].strDrinkThumb });
      setCocktailName(data.drinks[0].strDrink);
    }
    getCocktailInfo();
  }, [id]);

  function onClick() {
    console.log(id);
    let newId = id + 1;
    setId(newId);
  }

  return (
    <div className="App">
      <DisplayContent
        imageUrl={catInfo.imageUrl}
        altText={"here is a cats"}
        text={"Cats"}
      />
      <DisplayContent
        imageUrl={cocktailInfo.imageUrl}
        altText={"here is a cocktail"}
        text={cocktailName}
      />
      <Button onClick={onClick} />
    </div>
  );
}

export default App;
