import { useState } from "react";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  console.log("Search Term: " + searchTerm);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="searchBox">
      <label htmlFor="orderid">Order Id: </label>
      <input
        onChange={handleChange}
        type="text"
        id="orderid"
        placeholder="Search..."
      />
    </div>
  );
};
//

export default SearchBox;
