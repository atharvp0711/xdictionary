import React, { useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [definition, setDefinition] = useState("");

  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleInputChange = (e) => {
    setDefinition("");
    let word = e.target.value;
    setInputText(word);
  };

  const handleSearch = () => {
    let wordInput = inputText;
    let dictObj = dictionary.find(
      ({ word }) => word.toLowerCase() === wordInput.toLowerCase()
    );
    setDefinition(
      dictObj ? dictObj.meaning : "Word not found in the dictionary."
    );
  };
  return (
    <div>
      <h1> Dictionary App </h1>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Search for a word..."
          required
          autoFocus
        />
        <button type="submit" onClick={handleSearch} cursor="pointer">
          Search
        </button>
      </div>
      <h4> Definition: </h4>
      {definition && <p> {definition} </p>}
    </div>
  );
};

export default App;
