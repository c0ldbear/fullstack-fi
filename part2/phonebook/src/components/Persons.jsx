const Persons = ({ personsToShow }) => {
  return (
    <>
      {personsToShow.map((person) => {
        return (
          <div key={person.id}>
            {person.name} {person.number}
          </div>
        );
      })}
    </>
  );
};

export default Persons;
