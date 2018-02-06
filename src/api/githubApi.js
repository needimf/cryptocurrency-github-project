import TOPSIX from './config/topSixData';
import FORMATGITAPI from './config/formatGithubApi';

const GITHUBAPI = {
  /* 
    Uses preset data from api/config directory
    to fetch repo data from the public Github
    API.
  */
     
  fetchTop6CryptoProjects: function() {
    const fetchPromises = [];
    TOPSIX.forEach(currency => {
      let URI = `https://api.github.com/repos/${currency.repoName}`
      let request = fetch(URI, {
        method: 'get'
      }).then(res => {
        if(res.ok) {
          return res.json();
        }
        throw new Error('Network response was not ok.');
      })
      fetchPromises.push(request);
    });

    return Promise.all(fetchPromises).then(projects => FORMATGITAPI.formatTopSixResults(projects)).catch(err => undefined);
  },

  /* 
    Searches GitHub's public API for repositories
    matching the user's search term and returns results
    sorted by number of stars.
  */
  fetchSearchRepositories: function(search) {
    let URI = `https://api.github.com/search/repositories?q=${search}+fork:true&sort=stars`
    return (
      fetch(URI, {
        method: 'get'
      }).then(response => {
        if(response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.')
      }).then(searchResults => FORMATGITAPI.formatGeneralSearchResults(searchResults))
      // Must return an empty array to permit correct rendering
      // on client for searches consisting of only spaces
      .catch(err => [])
    )
  }
}

export default GITHUBAPI;