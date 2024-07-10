import { useState } from "react";
import "./App.css";
import Note from "./components/Note";

function App(props) {
  // We will use functional programming operators now of the JS _array_,
  // such as find, filter, and map
  const defaultInputText = "a new note ...";
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState(defaultInputText);

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    console.log(">> event.target.value", event.target.value);
    setNewNote(event.target.value);
  };

  const handleOnNoteFocus = (event) => {
    console.log(">> event", event);
    setNewNote("");
  };

  const handleOnNoteBlur = (event) => {
    setNewNote(defaultInputText);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} /> // NOTE (lol) that the 'key' attribute now must be defined for the Note components, and not for the li tags like before.
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
          onFocus={handleOnNoteFocus}
          onBlur={handleOnNoteBlur}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;
