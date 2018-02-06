import React from 'react';
import Card from './../Card/Card';

const Cards = (props) => {
  let cards;

  if (props.projectData) {
    cards = (
      <div className='columns is-multiline'>
        {props.projectData.map((project, idx) => {
          return (
            <Card
              key={idx}
              project={project}
              rank={idx + 1}
              isTopSix={props.isTopSix}
            />
          );
        })}
      </div>
    )
  } else {
    cards = (
      <div className='has-text-centered'>Trouble obtaining Top Six data, try refreshing the page.</div>
    )
  }

  return (
    <div className='container'>
      {cards}
    </div>
  )
}

export default Cards;