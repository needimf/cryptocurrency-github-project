import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='column is-one-third-desktop is-half-tablet'>
      <div className='card'>
        <div className='card-content'>

        {/* Card header */}
          <div className='level is-mobile'>
            <div className='level-left'>
              <div className='level-item'>
                <figure className='image is-64x64'>
                  <img src={props.project.organization.avatar_url} alt='Organization Avatar' />
                </figure>
              </div>
              <div className='level-item'>
                <div>
                  <p className='title is-4'>{props.project.name}</p>
                </div>
              </div>
            </div>
            <div className='level-right'>
              <div className='level-item has-text-centered'>
                <div>
                  <p className='heading'>Rank</p>
                  <p className='title'>{props.rank}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description section */}
          <div>
            {props.project.description}
          </div>
          <div className='Card-divider'></div>

          {/* Repo information section */}
          <div className='columns is-centered is-multiline'>
            <div className='column is-half-tablet'>
              <div className='has-text-centered'>
                <p className='heading'>Language</p>
                <p className='title'>{props.project.language}</p>
              </div>
            </div>
            <div className='column is-half-tablet'>
              <div className='has-text-centered'>
                <p className='heading'>Open Issues</p>
                <p className='title'>{props.project.open_issues}</p>
              </div>
            </div>
            <div className='column is-half-tablet'>
              <div className='has-text-centered'>
                <p className='heading'>Forks</p>
                <p className='title'>{props.project.forks}</p>
              </div>
            </div>
          </div>

          {/* Navigation section */}
          <div className='level'>
            <div className='level-item'>
              <div className='field is-grouped'>
                {/* If there is a homepage, this logical
                    operator expression will return the
                    necessary React elements to display
                    the homepage link.
                 */}
                {props.project.homepage && (
                  <p className='control'>
                    <a href={props.project.homepage} className='button is-link'>
                      Homepage
                    </a>
                  </p>)}
                <p className='control'>
                  <a href={props.project.html_url} className='button'>
                    <span className='icon'>
                      <i className='fab fa-github'></i>
                    </span>
                    <span>GitHub</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;