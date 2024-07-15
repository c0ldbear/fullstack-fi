import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "040-1234567" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handlePhonebookNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhonebookNumberChange = (event) => {
    setNewNumber(event.target.value);
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
      number: newNumber,
    };

    if (findDuplicatePerson(personObject)) {
      alert(`${personObject.name} is already added to phonebook.`);
    } else {
      setPersons(persons.concat(personObject));
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePhonebookNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handlePhonebookNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return (
          <div key={person.name}>
            {person.name} {person.number}
          </div>
        );
      })}
    </div>
  );
};

export default App;
