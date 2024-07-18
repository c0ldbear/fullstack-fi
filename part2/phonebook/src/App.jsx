import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import phonebookService from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    phonebookService.getAll().then((initialPersons) => {
      setNotificationMessage(null);
      setPersons(initialPersons);
    });
  }, []);

  const isNameInPersons = (name) => {
    return name.toLowerCase().includes(filterValue.toLowerCase());
  };

  const updateNotificationMessage = (message) => {
    setNotificationMessage(message);
    setTimeout(() => {
      setNotificationMessage(null);
    }, 3000);
  };

  const personsToShow = persons.filter((person) => {
    return isNameInPersons(person.name);
  });

  return (
    <div>
      <h2>Phonebook</h2>
      {notificationMessage && <Notification message={notificationMessage} />}
      <Filter filterValue={filterValue} setFilterValue={setFilterValue} />

      <h3>Add a new</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        updateNotificationMessage={updateNotificationMessage}
      />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;
