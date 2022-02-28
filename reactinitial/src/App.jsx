import React, { useEffect, useState } from "react";
import http from "axios";

const App = () => {
  const load = async() => {
    const response = await http.get("https://seriescharacters.com/api/howimetyourmother");
    console.log(response.data);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h1>Series API</h1>
    </div>
  )
}

export default App

/*
git commit mar a legelejen!
+ mindent is!
*/
