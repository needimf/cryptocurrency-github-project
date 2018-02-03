import React, {Component} from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  /*---------- Callback Methods ----------*/

  /*---------- Lifecycle Methods ----------*/ 
  render() {
    return (
      <nav className='navbar is-fixed-top is-dark'>
        <div className='navbar-brand'>
          <p className='navbar-item is-size-4 has-text-weight-semibold'>Crypto Github Projects</p>

          <button className='button navbar-burger is-dark'>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-end'></div>
            <div className='navbar-item'>
              <button className='button is-black'>Top 6</button>
            </div>
            <div className='navbar-item'>
              <button className='button is-black'>Find a Project</button>
            </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;