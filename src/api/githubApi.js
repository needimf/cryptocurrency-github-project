import TOPSIX from './config/topSixData';

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

    return Promise.all(fetchPromises)
  }
}

export default GITHUBAPI;