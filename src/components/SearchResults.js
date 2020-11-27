import React from "react";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  } else {
    return (
      <div className="imageContainer">
        {results.map((image, index) => (
          <img className="nasaImage" key={index} alt="spaceImage" src={image} />
        ))}
      </div>
    );
  }
};

export default SearchResults;
