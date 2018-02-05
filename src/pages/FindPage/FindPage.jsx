import React, {Component} from 'react';
import SearchBanner from './../../components/SearchBanner/SearchBanner';
import SearchResultsDisplay from './../../components/SearchResultsDisplay/SearchResultsDisplay';
import GITHUBAPI from './../../api/githubApi';

class FindPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchCompleted: false,
      searchResults: []
    }
  }

  /*---------Event Handlers---------*/

  updateSearch = (e) => {
    this.setState({search: e.target.value})
  }

  handleSearchClick = () => {
    GITHUBAPI.fetchSearchRepositories(this.state.search)
      .then((repositories) => {
        console.log(repositories)
        this.setState({
          searchResults: repositories,
          searchCompleted: true
        })
      });
  }

  /*---------Lifecycle Methods---------*/
  render() {
    return (
      <div>
        <SearchBanner 
          search={this.state.search}
          updateSearch={this.updateSearch}
          handleSearchClick={this.handleSearchClick}
        />
        <SearchResultsDisplay
          searchCompleted={this.state.searchCompleted}
          searchResults={this.state.searchResults}
        />
      </div>
    )
  }

}

export default FindPage;