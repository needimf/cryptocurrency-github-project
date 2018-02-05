const FORMATGITAPI = {
  // Takes in all data returned from Github
  // API (as an array of objects), and cleans
  // up the resulting data objects for each
  // of the Top Six projects
  formatTopSixResults: function(arrayOfTopData) {
    return arrayOfTopData.map(project => {
      let reformattedData = {};
      reformattedData.name = project.name;
      reformattedData.description = project.description;
      reformattedData.open_issues = project.open_issues;
      reformattedData.avatar_url = project.organization.avatar_url;
      reformattedData.language = project.language;
      reformattedData.forks = project.forks;
      reformattedData.homepage = project.homepage;

      return reformattedData;
    })
  },

  formatGeneralSearchResults: function(searchResult) {
    return searchResult.items;
  }
}

export default FORMATGITAPI;