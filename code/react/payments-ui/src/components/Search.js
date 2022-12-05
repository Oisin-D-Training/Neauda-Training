import { useState } from "react";

const Search = (props) => {
  const [valid, setValid] = useState(true);
  const [touched, setTouched] = useState(false);
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const checkValidity = (value) => {
    setValid(value.trim().length > 0);
  };

  const handleChange = (event) => {
    setTouched(true);
    setLocalSearchTerm(event.target.value);
    checkValidity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setSearchTerm(localSearchTerm);
    console.log("Searching for: " + props.searchTerm);
  };

  const resetSearch = () => {
    setLocalSearchTerm("");
    setTouched(false);
    setValid(true);
    props.setSearchTerm("");
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <label htmlFor="orderId">Order Id</label>
        <input
          onChange={handleChange}
          value={localSearchTerm}
          id="orderId"
          type="text"
          style={{ border: valid ? "1px solid #000" : "2px solid #f00" }}
        />
        <button type="submit" disabled={!valid || !touched}>
          Search
        </button>
        <button type="reset" onClick={resetSearch}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default Search;
