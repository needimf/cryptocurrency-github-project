import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarMenuStatus: ''
    };
  }
  /*---------- Event Handlers ----------*/
  handleNavBarClickMobile = () => {
    this.setState(prevState => ({
      navbarMenuStatus: prevState.navbarMenuStatus ? '' : ' is-active'
    }))
  }

  /*
    Close navbar menu if clicked outside of menu
  */
  handleClickOutside = (e) => {
    if (!this.node.contains(e.target)) {
      if (this.state.navbarMenuStatus) {
        this.setState({navbarMenuStatus: ''})
      }
    }
  }

  /*---------- Lifecycle Methods ----------*/ 
  componentDidMount() {
    // Listens for clicks outside of the navbar to collapse
    // menu if needed
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    return (
      <nav 
        className='navbar is-fixed-top is-warning'
        ref={node => {this.node = node}}
      >
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
        <div 
          className={`navbar-menu${this.state.navbarMenuStatus}`}>
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