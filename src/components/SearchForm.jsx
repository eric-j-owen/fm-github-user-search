import { useState } from "react";

function SearchForm({handleSubmit}) {
  const [query, setQuery] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    handleSubmit(user);
  }

  function handleChange(e) {
    setQuery(e.target.value)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        <input
          type="text"
          id="search-input"
          aria-label="Search field"
          placeholder="Search GitHub username..."
          value={query}
          onChange={handleChange}
        />
      </label>
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
