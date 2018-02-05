import React from 'react';
import Cards from './../Cards/Cards';

const SearchResultsDisplay = (props) => {
  let display;

  if (props.searchCompleted) {
    display = props.searchResults.length > 0 ? 
      <Cards projectData={props.searchResults} />
      :
      <div>No results to display, try another search.</div>
  } else {
    display = (<div>Search for your project!</div>)
  }
  return (
    <div>
      {display}
    </div>
  )
}

export default SearchResultsDisplay;