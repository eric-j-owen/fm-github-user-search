function SearchForm() {
  return (
    <form>
      <label>
        <input
          type="text"
          id="search-input"
          aria-label="Search field"
          placeholder="Search GitHub username..."
        />
      </label>
      <button>
        Search
      </button>
    </form>
  );
}

export default SearchForm;