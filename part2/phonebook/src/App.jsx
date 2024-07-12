import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handlePhonebookChange = (event) => {
    setNewName(event.target.value);
  };

  const findDuplicatePerson = (newPerson) => {
    return persons.find((person) => person.name.toLowerCase() === newPerson.name.toLowerCase())
      ? true
      : false;
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
    };

    if (findDuplicatePerson(personObject)) {
      alert(`${personObject.name} is already added to phonebook.`);
    } else {
      setPersons(persons.concat(personObject));
    }
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePhonebookChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return <div key={person.name}>{person.name}</div>;
      })}
    </div>
  );
};

export default App;
