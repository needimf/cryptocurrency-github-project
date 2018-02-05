import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarMenuStatus: ''
    };
  }
  /*---------- Callback Methods ----------*/
  handleNavBarClickMobile = () => {
    this.setState(prevState => ({
      navbarMenuStatus: prevState.navbarMenuStatus ? '' : ' is-active'
    }))
  }

  /*---------- Lifecycle Methods ----------*/ 
  render() {
    return (
      <nav className='navbar is-fixed-top is-warning'>
        <div className='navbar-brand'>
          <p className='navbar-item is-size-4 has-text-weight-semibold'>Crypto Github Projects</p>

          <button 
            className={`button navbar-burger is-warning${this.state.navbarMenuStatus}`}
            onClick={() => this.handleNavBarClickMobile()}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`navbar-menu${this.state.navbarMenuStatus}`}>
          <div className='navbar-end'>
            <Link to='/' className='navbar-item' onClick={() => this.handleNavBarClickMobile()}>
              Top 6
            </Link>
            <Link to='/find' className='navbar-item' onClick={() => this.handleNavBarClickMobile()}>
              Find a Project
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;