import React from 'react';
import Cards from './../Cards/Cards';

const SearchResultsDisplay = (props) => {
  let display;

  /*
    If no search has been conducted, then don't display anything.

    If the search has been completed, then either display the repo
    information or a message explaining a failed search.
  */
  if (props.searchCompleted) {
    display = props.searchResults.length > 0 ? 
      <Cards projectData={props.searchResults} isTopSix={false} />
      :
      <div className='has-text-centered'>Couldn't find anything matching "{props.prevSearch}", try another search.</div>
  }

  return (
    <section className='section'>
      {display}
    </section>
  )
}

export default SearchResultsDisplay;