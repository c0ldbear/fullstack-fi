const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {
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

  return (
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
  );
};

export default PersonForm;
