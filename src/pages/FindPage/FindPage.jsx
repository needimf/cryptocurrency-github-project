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
      searchResults: [],
      isSearching: false
    }
  }

  /*---------Event Handlers---------*/

  updateSearch = (e) => {
    this.setState({search: e.target.value})
  }

  handleSearchClick = () => {
    if (this.state.search) {
      this.setState({isSearching: true}, this.fetchGitHubSearch())
    }
  }

  fetchGitHubSearch = () => {
    GITHUBAPI.fetchSearchRepositories(this.state.search)
      .then((repositories) => {
        this.setState(prevState => ({
          searchResults: repositories,
          searchCompleted: true,
          prevSearch: prevState.search,
          isSearching: false
        }))
      })
  }

  /*---------Lifecycle Methods---------*/
  render() {
    return (
      <div>
        <SearchBanner 
          search={this.state.search}
          updateSearch={this.updateSearch}
          handleSearchClick={this.handleSearchClick}
          isSearching={this.state.isSearching}
        />
        <SearchResultsDisplay
          prevSearch={this.state.prevSearch}
          searchCompleted={this.state.searchCompleted}
          searchResults={this.state.searchResults}
        />
      </div>
    )
  }

}

export default FindPage;