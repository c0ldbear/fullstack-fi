import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Note from "./components/Note";

function App() {
  // We will use functional programming operators now of the JS _array_,
  // such as find, filter, and map
  const defaultInputText = "a new note ...";
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState(defaultInputText);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log(">> effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log(">> promise fulfilled!");
      setNotes(response.data);
    });
  }, []);
  console.log(">> render", notes.length, "notes");

  const notesToShow = showAll ? notes : notes.filter((note) => note.important === true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObject)); // concat produces a new copy with the added new noteObject instead of mutating the original array
    // we shall never mutate state directly in React.
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

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={handleShowAll}>
          show <b>{showAll ? "important" : "all"}</b>
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} /> // NOTE (lol) that the 'key' attribute now must be defined for the Note components, and not for the li tags like before.
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} onFocus={handleOnNoteFocus} />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;
