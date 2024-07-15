const Filter = ({ filterValue, setFilterValue }) => {
  const handleFilter = (event) => {
    setFilterValue(event.target.value);
  };

  const submitFilterPersonsByName = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitFilterPersonsByName}>
      <div>
        filter shown with <input value={filterValue} onChange={handleFilter} />
      </div>
    </form>
  );
};

export default Filter;
