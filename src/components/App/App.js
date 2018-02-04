import React, { Component } from 'react';
import './App.css';
import NavBar from './../NavBar/NavBar';
import Cards from './../Cards/Cards';
import GITHUBAPI from './../../api/githubApi';

class App extends Component {

  /*---------Lifecycle Methods---------*/
  componentDidMount() {
    // Gets data from Github for the Top 6 crypto projects by 
    // market cap and updates state
    GITHUBAPI.fetchTop6CryptoProjects()
      .then((repoData) => {
        this.setState({
          top6Repos: repoData
        })
      });
  }

  render() {
    return (
      <div>
        <NavBar />
        <section className='section'>
          <div className='container'>
            <h1 className='title is-3 has-text-centered'>Top 6 Cryptocurrency/Blockchain Projects</h1>
            <h2 className='subtitle is-5 has-text-centered'>By Total Market Capitilization</h2>
          </div>
        </section>
        <section className='section'>
          <Cards />
        </section>
      </div>
    );
  }
}

export default App;