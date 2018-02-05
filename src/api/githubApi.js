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
      }).then(res => res.json());
      fetchPromises.push(request);
    });

    return Promise.all(fetchPromises).then(projects => FORMATGITAPI.formatTopSixResults(projects));
  },

  fetchSearchRepositories: function(search) {
    let URI = `https://api.github.com/search/repositories?q=${search}+fork:true&sort=stars`
    return (
      fetch(URI, {
        method: 'get'
      })
      .then(response => response.json()).then(searchResults => FORMATGITAPI.formatGeneralSearchResults(searchResults))
    )
  }
}

export default GITHUBAPI;