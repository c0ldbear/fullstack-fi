import "./App.css";

function App(props) {
  // We will use functional programming operators now of the JS _array_,
  // such as find, filter, and map

  const { notes } = props;

  const ids = notes.map((note) => note.id);
  console.log(">> ids:", ids);
  const contents = notes.map((note) => note.content);
  console.log(">> contents:", contents);

  const importants = notes.map((note) => note.important);
  console.log(">> importants:", importants);

  const antiPatternListElements = notes.map((note, index) => <li key={index}>{note.content}</li>);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
        {antiPatternListElements}
      </ul>
    </div>
  );
}

export default App;
