import phonebookService from "../services/phonebook";

const Persons = ({ personsToShow, persons, setPersons }) => {
  const deletePerson = ({ name, id }) => {
    const deleteConfirm = confirm(`delete ${name} (id: ${id})?`);

    if (deleteConfirm) {
      phonebookService.remove(id).then((returnedPerson) => {
        setPersons(persons.filter((person) => person.id !== returnedPerson.id));
      });
    }
  };

  return (
    <>
      {personsToShow.map((person) => {
        return (
          <div key={person.id}>
            {person.name} {person.number}
            <button onClick={() => deletePerson(person)}>delete</button>
          </div>
        );
      })}
    </>
  );
};

export default Persons;
