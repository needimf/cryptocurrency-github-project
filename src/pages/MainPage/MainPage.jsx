import React from 'react';
import Cards from './../../components/Cards/Cards';

const MainPage = (props) => {
  return (
    <div>
      <section className='hero is-medium is-dark'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>Top 6 Cryptocurrency Projects</h1>
            <h2 className='subtitle'>By Total Market Capitilization</h2>
          </div>
        </div>
      </section>
      <div className='section'>
        <Cards 
          projectData={props.projectData}
          isTopSix={true}
        />
      </div>
    </div>
  )
}

export default MainPage;