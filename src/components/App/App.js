import React, { Component } from 'react';
import './App.css';
import NavBar from './../NavBar/NavBar';
import Cards from './../Cards/Cards';
import GITHUBAPI from './../../api/githubApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topSixProjects: []
    }
  }

  /*---------Lifecycle Methods---------*/
  componentDidMount() {
    // Gets data from Github for the Top 6 crypto projects by 
    // market cap and updates state
    GITHUBAPI.fetchTop6CryptoProjects()
      .then((repoData) => {
        this.setState({
          topSixProjects: repoData
        })
      });
  }

  render() {
    return (
      <div>
        <NavBar />
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
            topSixProjects={this.state.topSixProjects}
          />
        </div>
      </div>
    );
  }
}

export default App;