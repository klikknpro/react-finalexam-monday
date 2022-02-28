import React, { useEffect, useState } from "react";
import http from "axios";
import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";

const App = () => {
  const [characters, setCharacters] = useState(null);

  const load = async() => {
    const response = await http.get("https://seriescharacters.com/api/howimetyourmother");
    setCharacters(response.data);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h1>Series API</h1>
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
