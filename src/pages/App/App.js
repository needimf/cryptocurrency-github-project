import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './../../components/NavBar/NavBar';
import MainPage from './../MainPage/MainPage';
import FindPage from './../FindPage/FindPage';
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
        <Switch>
          <Route exact path='/' render={(props) =>
            <MainPage 
              projectData={this.state.topSixProjects}
            />}
          />
          <Route exact path='/find' render={(props) =>
            <FindPage />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;