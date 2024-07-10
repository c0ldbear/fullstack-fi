import { useState } from "react";
import "./App.css";

function App(props) {
  // We will use functional programming operators now of the JS _array_,
  // such as find, filter, and map

  const { notes } = props;

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
    </div>
  );
}

export default App;
