// components/SearchResult.js
import React, { useState } from 'react';

const SearchResult = ({ searchDatabase }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchResults = searchDatabase(query);
    setResults(searchResults);
    setQuery('');
  };

  return (
    <div>
      <h2>Search</h2>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <h3>Search Results:</h3>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
        {results.length === 0 && <p>No results found</p>}
      </ul>
    </div>
  );
};

export default SearchResult;
