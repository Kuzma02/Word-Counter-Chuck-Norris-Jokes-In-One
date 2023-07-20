import { useEffect, useState } from "react";
import "../styles/ChuckNorrisJokes.css";

export const ChuckNorrisJokes = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data));
  }, []);

  return (
    <div className="chuck-main">
      <h1>Chuck Norris Jokes</h1>
      <p>Free JSON API for hand curated Chuck Norris facts</p>
      <p className="joke">{joke.value}</p>
    </div>
  );
};
