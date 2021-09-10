import "./App.css";
import DisplayContent from "../DisplayContent";
import React, { useState } from "react";

function App() {
  const [catInfo, setCatInfo] = useState({
    imageUrl:
      "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg",
    text: "here is the cat",
  });

  return (
    <div className="App">
      <DisplayContent imageUrl={catInfo.imageUrl} text={catInfo.text} />
    </div>
  );
}

export default App;
