# Forecast USA

## Overview
A light weight interface to obtain 5 days of weather forecast information

## Resources
1. [SCRUM board via Trello](https://trello.com/b/OQqm0IL3/forecast)
2. [GitHub Repository](https://github.com/wingedearth/forecast)
3. [Changelog](https://github.com/wingedearth/forecast/blob/master/CHANGELOG.md)
4. [Deployed application](https://wingedearth-forecast.herokuapp.com/)

## Technologies

1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2. [Node.js](https://nodejs.org) v.10+
3. [Git](https://git-scm.com)
4. [Webpack 5](http://webpack.js.org)
5. [BabelJS](http://babeljs.io)
6. [ExpressJS](http://expressjs.com)
7. [Axios](https://www.npmjs.com/package/axios)
8. [React](https://reactjs.org)
9. [commitlint](https://commitlint.js.org/#/)
10. [nodemon](https://nodemon.io)
11. [date-fns](https://date-fns.org)
12. [Jest](https://jestjs.io)

## Set up your local repository

1. From your terminal (Bash or Zsh), in a directory of your choice, enter the following command, to create a folder called "prequalifier": ```git clone https://github.com/wingedearth/forecast.git```

2. Enter ```cd forecast``` to enter the folder.

3. Enter ```yarn``` to run yarn, which will install the local NPM package dependencies. If you do not have yarn installed globally on your machine, then first enter ```npm i -g yarn``` to install yarn.

### Build and start the application for development

1. Enter ```yarn build``` in the command line to run a Webpack build of the application, the proceeds of which will be written to a ```/dist``` folder in the ```portfolio``` directory. This will run the server and client side builds using Webpack.

2. In a separate tab or window enter ```yarn dev``` in the command line to start the server. Then in a browser, navigate to ```localhost:4000```


### Build and start the application for production

1. Enter ```yarn build:prod``` in the command line to run a production build.

2. After the build is complete, enter ```yarn start``` to start the server.


### Test the application

1. At the command line, enter ```yarn test```
2. Also, every git commit will run all unit tests and require that they pass before completing.


## Routes
The application includes an ExpressJS server that exposes the following routes:
1. GET: ```/``` - the main page of the site
2. GET: ```/version``` - returns version information in JSON format
3. POST: ```/api``` - takes the user's POST body and then sends its own GET request to Open Weather, returning the response data back to the user.

## Express API
route: ```/api```
### Search by cityid
#### POST body:
```
{
	queryType: BY_ID,
	cityid: [cityid]
}
```

### Search by city
#### POST body:
```
{
	queryType: BY_CITY,
	city: [city],
	state: [state],
	country: [country]
}
```

### Search by zip code
#### POST body:
```
{
	queryType: BY_ZIP,
	zip: [zip code]
}
```


## Notes
### Agile
I approached Forecast USA with an agile mindset, intending to build simple and increment functionality. This would allow me to have discrete functionality at each step without unnecessarily expanding the size of the project.

### Git / GitHub
After planning out some of the upcoming tasks on Trello, I began the project by starting a repository on GitHub and synced it to my local machine running a Zsh command line with Git instantiated in the project.

### Changelog, Commitlint
Early on, I used conventional commits and commitlint in order to automatically generate a Changelog to track my progress as I build more features into the app.

### JavaScript, Node.js, and Yarn
I knew immediately that I would be writing JavaScript to create a web-based user interface and that I would be depending on open source Node packages, so I selected Yarn as my package manager and instantiated Yarn in my project.
### Webpack
I decided to use Webpack to manage the build and to transpile JS with Babeljs for compatibility.

### Express server
At first I debated whether a backend would even be needed. The necessity of using an API key convinced me that I would like communication with the Open Weather Map API to be handled from the backend, so I started by building an Express Server and setting up an endpoint that would query the Open Weather Map API for weather data.

### Postman
To test the Open Map API, I queried it directly using Postman and successfully got response data back using my API key. 

### My Express API
I proceeded to set up a few different functioning queries on my Express server at the /api route: by cityid, by zip, and by city/country. After making the endpoint functional from the app and setting up the API key as an environmental variable, I was able to send post requests to my own server running on localhost and get data back from Open Weather Map.

### React, ReactDOM
I used the React library to lay out and manage the pieces of the page that I would be using in my application. I initially set up some basic components and used ReactDOM to render them to string and inject them into a template in order to have a complete page in my server response for the main home route. 

I already was using Webpack to build my Express server. I set up a second Webpack build for my frontend.

The benefit of using universal JavaScript is that the frontend layout would use the same, shared code and components as the server and then hydrate the page to set up event handlers and start the application in the user's browser.


### Styling
I added a Sass loader to my Webpack configs so that I could create stylesheets in Sass and import them directly into individual components.  I also added PostCSS loader in case I would want to add additional functionality to my styling, which I did with PostCSS emojis.

For my styles, I added a few global styles including a CSS reset, some mixins to set standard breakpoints for responsive design, and some basic color choices for a theme. I went with an American flag based red, white, and blue theme.

### Navigation
I started building the app's main page with a banner at the top that could potentially include Navigation options. As a single page application, I didn't have any actual navigation options to add, so I included an app title and, since this project is a demo, I added links to my GitHub repository and my Trello board.

### Search Form
It was simplest to begin the search form with a zip code search, since it's a single field. In building the form, I noticed several different state variables that I would need to track, such as the state of the form, the state of submission, the state of the search type (in case I would add additional search types in the future), and the state of having versus not having weather data available. 

## Wrapping up
Upon completing the search form, and the search result experience, I found myself with a complete application serving a niche. An entirely uncomplicated UI to enter a zip code and get weather anywhere in the United States. Together my US flag color theme, I found that the application provided a complete solution for a nice and had the benefit of simplicity and ease of use.

Regarding more features for the end user, I haven't yet decided whether to add an option to search by city / state. Even keeping the application as a niche for US use, rather than having takend the obvious route of international, universal use, it may be that US users may want to search the weather in other cities without necessarily knowing the zip code. That being the case, I will likely have to add an additional form to search by City, which I have already set up the foundation for on the backend.

Regarding features for the application itself, I have have added some unit tests, as well as a commit hook so that tests would be run before any git commit could complete. But I have not yet added tests for all of the components nad utilities, which will ultimately be needed.

For the search form, I also should add some validation rules for zip codes (i.e. only 5-char numbers).
