import React, { useState } from "react";
import "../styles/WordCounter.css";

export const WordCounter = () => {
  const [text, setText] = useState("");
  const [ wordsNumber, setWordsNumber ] = useState(0);

  const calculateWords = () => {
    const arr = text.split(" ");

    setWordsNumber(arr.filter((word) => word !== "").length);
  };

  return (
    <div className="wordcounter-main">
      <h1>Word Counter</h1>
      <p>Free online character and word count tool.</p>
      <div className="wordcounter-center">
        <textarea
          value={text}
          name="wordcounterinput"
          onChange={(event) => {
            setText(event.target.value);
            calculateWords();
          }}
          className="wordcounter-input"
          cols="100"
          rows="10"
          placeholder="Type or paste your text here"
        ></textarea>
        {text ? ( <button className="clear-btn" onClick={() => {setText("");setWordsNumber("");}}>Clear</button>) : (<button className="clear-btn" disabled>Clear</button>)}
      </div>
      <div className="wordcounter-bottom">
        <button>Character: {text.length}</button>
        <button>Word: {wordsNumber || 0}</button>
      </div>
    </div>
  );
};
