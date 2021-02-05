# forecast

## Overview
A light weight interface to obtain 5 days of weather forecast information

## Resources
1. [SCRUM board via Trello](https://trello.com/b/OQqm0IL3/forecast)
2. [GitHub Repository](https://github.com/wingedearth/forecast)
3. [Changelog](https://github.com/wingedearth/forecast/blob/master/CHANGELOG.md)

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
