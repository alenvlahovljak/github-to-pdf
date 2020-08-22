# GitHub to PDF Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> ### Technologies: React.js

# Getting started

To get the Node server running locally:

-  Clone this repo
-  `npm install` to install all required dependencies
-  `npm start` to start the local server
-  You have to set a couple of variables for local usage:
   -  REACT_APP_CLIENT_ID = 77c0100e60b4bd8cff17
   -  REACT_APP_PROXY_URL = http://localhost:8000/auth
   -  REACT_APP_REDIRECT_URI = http://localhost:3000/login
   -  REACT_APP_BASE_URL = https://localhost:8000

Alternately, to quickly try out this repo at [THIS](https://github-to-pdf.netlify.app/) link.

# Architecture

## Components Model

# ![React Components Model](https://ibb.co/vmXQtdJ)

# Code Overview

## Dependencies

-  [@fortawesome/react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) - Official React component for Font Awesome 5.
-  [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and Node.js.
-  [env-cmd](https://www.npmjs.com/package/env-cmd) - Node program for executing commands using an environment from an .env file.
-  [react](https://www.npmjs.com/package/react) - React is a JavaScript library for creating user interfaces.
-  [react-dom](https://www.npmjs.com/package/react-dom) - React package for working with the DOM.
-  [react-redux](https://www.npmjs.com/package/react-redux) - Official React bindings for Redux.
-  [react-router-dom](https://www.npmjs.com/package/react-router-dom) - DOM bindings for React Router.
-  [react-scripts](https://www.npmjs.com/package/react-scripts) - Configuration and scripts for Create React App.
-  [react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize) - Textarea component for React.
-  [react-to-pdf](https://www.npmjs.com/package/react-to-pdf) - Easily create pdf documents from React components.
-  [redux](https://www.npmjs.com/package/redux) - Predictable state container for JavaScript apps.
-  [redux-thunk](https://www.npmjs.com/package/redux-thunk) - Thunk middleware for Redux.

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

# Deploy

Frontend is deployed on [Netlify](https://github-to-pdf.netlify.app/).

The process of deploy:

-  Login to Netlify account via Browser
-  Connect to Git provider
-  Pick a repo
-  Config build and deploy
-  Add Environment variables
