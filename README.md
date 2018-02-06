# Cryptocurrency Projects Showcase

## Overview

Cryptocurrency Projects Showcase highlights, and display information about the top 6 cryptocurrency/blockchain projects by total market capitalization. Additionally, users can search for popular GitHub repositories via search string. Information is retrieved via the public Github API.


### Screenshot

<img src="https://i.imgur.com/hLejv3U.png"
     alt="Screenshot of main page"
     style="margin: 0 auto; max-width: 80%;" />

---

## Technologies Used

- React
- HTML
- CSS
- Javascript
- Github API
- Jest
- Enzyme
- Webpack
- Babel
- ESlint

---

## The Design

User stories and planning documents can be found at: [Cryptocurrency Github Project Planning Board](https://trello.com/b/j71gVubz/cryptocurrency-github-repos-app)

---

## Local Installation Instructions

### From Github

1. Clone the repo from your terminal ```git clone https://github.com/needimf/cryptocurrency-github-project.git```
2. Make sure to have Node and npm installed
3. Install npm packages with ```npm install```
4. Run React with ```npm start```
5. Browse to ```http://localhost:3000``` and enjoy the app!

### OR

Check it out online here: https://cryptoprojects.herokuapp.com

---

## Considerations

I decided to include a api/config/topSixData.js file in order to make it easier to update the Top Six list depending on market conditions. I also decided against implementing another API to pull down the current top six projects for one main reason: some of the top cryptocurrencies do not utilize strictly their own blockchain technologies. This fact complicated my attempts to get current top six lists.

---

## Future Steps

- Display the actual market capitilization dollar value for each crytpocurrency/blockchain project
- Use the CoinMarketAPI in conjunction with the GitHub API to fetch the project information for current Top Six projects by total market capitilization at time of page load