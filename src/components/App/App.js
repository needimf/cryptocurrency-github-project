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
        <section className='section'>
          <div className='container'>
            <h1 className='title is-3 has-text-centered'>Top 6 Cryptocurrency/Blockchain Projects</h1>
            <h2 className='subtitle is-5 has-text-centered'>By Total Market Capitilization</h2>
          </div>
        </section>
        <Cards 
          topSixProjects={this.state.topSixProjects}
        />
      </div>
    );
  }
}

export default App;