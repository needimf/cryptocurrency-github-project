import React from 'react';

const SearchBanner = (props) => {
  return (
    <div>
      <section className='hero is-medium'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <h1 className='title'>
              Find a Project
            </h1>
            <h2 className='subtitle'>
              Searches will return the most active related GitHub repos
            </h2>
            <div className='columns is-mobile is-centered'>
              <div className='column is-narrow'>
                <div className='field has-addons'>
                  <div className='control'>
                    <input 
                      type="text" 
                      value={props.search}
                      onChange={(e) => {props.updateSearch(e)}}
                      className='input' 
                      placeholder='Search GitHub'
                    />
                  </div>
                  <div className='control'>
                    <button 
                      className='button is-dark'
                      onClick={() => {props.handleSearchClick()}}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SearchBanner;