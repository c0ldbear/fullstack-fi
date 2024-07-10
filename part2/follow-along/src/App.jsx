import "./App.css";
import Note from "./components/Note";

function App({ notes }) {
  // We will use functional programming operators now of the JS _array_,
  // such as find, filter, and map

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} /> // NOTE (lol) that the 'key' attribute now must be defined for the Note components, and not for the li tags like before.
        ))}
      </ul>
    </div>
  );
}

export default App;
