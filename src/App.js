import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "๐ฅบ": "Begging sorry shame",
  "๐": "Sad",
  "๐คฅ": "Liar",
  "๐": "Dissatisfied",
  "๐ก": "Angry Face",
  "๐": " Expressionless Face",
  "๐ฑ": "Face Screaming in Fear",
  "๐ง": "Anguished Face",
  "๐คฏ": "Exploding Head",
  "๐ค": "Face with Head-Bandage"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);

    console.log("emoji");
  }

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "failure to recognise this emoji ";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> EMOJI เคเคฐเฅเคฅ</h1>

      <input
        onChange={emojiInputHandler}
        placeholder={"put an emoji here to know the meaning"}
        style={{
          padding: "1rem",
          minWidth: "80%"
        }}
      />

      <div>
        <h1>{meaning} </h1>
      </div>

      <h2>emojis we know</h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
