// Import React so we can use JSX
import React from "react";

// This is the SearchBar component. It lets the user type something to search for items
export default function SearchBar({ query, setQuery }) {
  return (
    // The box that holds the search input
    <div className="searchbar">
      {/* The text box where the user types their search */}
      <input
        type="text"
        placeholder="Search by keyword…"
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
