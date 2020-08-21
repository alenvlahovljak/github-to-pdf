# GitHub to PDF Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> ### Technologies: Express.js, Node.js

# Getting started

To get the Node server running locally:

-  Clone this repo
-  `npm install` to install all required dependencies
-  `npm start` to start the local server
-  You have to set this variable for local usage:
   -  REACT_APP_CLIENT_ID = 77c0100e60b4bd8cff17
   -  REACT_APP_PROXY_URL = http://localhost:8000/auth
   -  REACT_APP_REDIRECT_URI = http://localhost:3000/login
   -  REACT_APP_BASE_URL = https://localhost:8000

Alternately, to quickly try out this repo at [THIS](https://github-to-pdf.netlify.app/) link.

# Code Overview

## Application Structure

-  `src/components/` - Stateless components.
-  `src/config/` - Third-party services configuration.
-  `src/containters/` - Statefull components.
-  `src/services/` - Third-party services configuration.
-  `src/public/` - Folder contain default images.
-  `src/services/` - API configuration.
-  `src/store/` - Redux store which contains actions and reducers.
-  `src/index.js` - The entry point to react app.

## Folder structure

```
├───config
├───public
└───src
    ├───components
    │   └───UI
    │       └───Login
    ├───config
    ├───containers
    │   ├───LandingPage
    │   ├───Popup
    │   └───Profile
    ├───public
    │   └───images
    ├───services
    └───store
        ├───actions
        └───reducers
```
