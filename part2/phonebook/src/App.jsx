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
  const [notification, setNotification] = useState({ message: null, type: null });

  useEffect(() => {
    phonebookService.getAll().then((initialPersons) => {
      setNotification({ message: null, type: null });
      setPersons(initialPersons);
    });
  }, []);

  const isNameInPersons = (name) => {
    return name.toLowerCase().includes(filterValue.toLowerCase());
  };

  const updateNotificationMessage = (message, type) => {
    setNotification({ message: message, type: type });
    setTimeout(() => {
      setNotification({ message: null, type: null });
    }, 3000);
  };

  const personsToShow = persons.filter((person) => {
    return isNameInPersons(person.name);
  });

  return (
    <div>
      <h2>Phonebook</h2>
      {notification.message && (
        <Notification message={notification.message} type={notification.type} />
      )}
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
