import React, { useEffect, useState } from "react";
import http from "axios";
import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";
import Subscription from "./components/Subscription";

const App = () => {
  const [characters, setCharacters] = useState(null);
  const [isShown, setIsShown] = useState(false);

  const load = async() => {
    const response = await http.get("https://seriescharacters.com/api/howimetyourmother");
    setCharacters(response.data);
  }

  useEffect(() => {
    load();
    setTimeout(() => {
      setIsShown(true)
    }, 5 * 1000);
  }, []);

  return (
    <div>
      <h1>Series API</h1>
      {isShown && <Subscription/>}
      {characters ?
       characters.map((character, i) => (
         <Character character={character} key={i}/>
       ))
       : <LoadingMask/>}
    </div>
  )
}

export default App

/*
git commit mar a legelejen!
+ mindent is!
*/
