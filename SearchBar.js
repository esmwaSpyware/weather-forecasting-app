import React, { useState } from "react";
import "./SearchBar.css"; // Import styles here

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(location);
    setLocation("");
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
