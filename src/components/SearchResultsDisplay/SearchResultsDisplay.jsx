import React from 'react';
import Cards from './../Cards/Cards';

const SearchResultsDisplay = (props) => {
  let display;

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