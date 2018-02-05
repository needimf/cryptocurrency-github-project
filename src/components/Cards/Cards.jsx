import React from 'react';
import Card from './../Card/Card';

const Cards = (props) => {
  let cards = props.projectData.map((project, idx) => {
    return (
      <Card
        key={project.id}
        project={project}
        rank={idx + 1}
      />
    );
  })
  return (
    <div className='container'>
      <div className='columns is-multiline'>
        {cards}
      </div>
    </div>
  )
}

export default Cards;