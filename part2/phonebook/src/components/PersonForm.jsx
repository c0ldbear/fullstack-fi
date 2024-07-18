import phonebookService from "../services/phonebook";

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  updateNotificationMessage,
}) => {
  const handlePhonebookNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhonebookNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const findDuplicatePerson = (newPerson) => {
    return persons.find((person) => person.name.toLowerCase() === newPerson.name.toLowerCase());
  };

  const updatePerson = (personObject) => {
    const updatePerson = confirm(
      `${personObject.name} is already added to phonebook, replace the old number with a new one?`
    );

    if (updatePerson) {
      const foundPerson = findDuplicatePerson(personObject);
      const updatedPerson = { ...foundPerson, number: personObject.number }; // we only want to update the number

      phonebookService.update(foundPerson.id, updatedPerson).then((returnedPerson) => {
        setPersons(
          persons.map((person) => (person.id !== foundPerson.id ? person : returnedPerson))
        );
        updateNotificationMessage(`Updated ${returnedPerson.name}`);
      });
    }
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (findDuplicatePerson(personObject)) {
      updatePerson(personObject);
    } else {
      phonebookService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        updateNotificationMessage(`Added ${returnedPerson.name}`);
      });
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
