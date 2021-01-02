import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p className="nrText">No results</p>;
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

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
