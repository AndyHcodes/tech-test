import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Search from "../components/Search";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <img
        className="logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="logo"
      />
      <div className="searchBar">
        <Search setSearchResults={setSearchResults} />
        <SearchResults results={searchResults} />
      </div>
    </div>
  );
}

export default App;
