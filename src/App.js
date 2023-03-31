import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Karakter from "./components/Karakter";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starwars, setStarwars] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/", {})
      .then(function (response) {
        console.log(response.data);
        setStarwars(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars &gt;</h1>

      {starwars.map((x) => (
        <Karakter data={x} />
      ))}
    </div>
  );
};

export default App;
