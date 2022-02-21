import { useState } from "react";

function Search({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  function updateSearch(e) {
    setSearchQuery(e.target.value);
    handleSearch(searchQuery)
  }

  return (
    <div>
        <label>Search: </label>
        <input type="text" onChange={updateSearch} />
    </div>
  )
}

export default Search