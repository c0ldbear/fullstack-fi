import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");

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
      id: persons.length + 1,
    };

    if (findDuplicatePerson(personObject)) {
      alert(`${personObject.name} is already added to phonebook.`);
    } else {
      setPersons(persons.concat(personObject));
    }
    setNewName("");
    setNewNumber("");
  };

  const handleFilter = (event) => {
    setFilterValue(event.target.value);
  };

  const submitFilterPersonsByName = (event) => {
    event.preventDefault();
  };

  const isNameInPersons = (name) => {
    return name.toLowerCase().includes(filterValue);
  };

  const personsToShow = persons.filter((person) => {
    return isNameInPersons(person.name);
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitFilterPersonsByName}>
        <div>
          filter shown with <input value={filterValue} onChange={handleFilter} />
        </div>
      </form>
      <h2>add a new</h2>
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
      {personsToShow.map((person) => {
        return (
          <div key={person.id}>
            {person.name} {person.number}
          </div>
        );
      })}
    </div>
  );
};

export default App;
