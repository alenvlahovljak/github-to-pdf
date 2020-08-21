# GitHub to PDF

> ### Technologies: React.js, Express.js, Node.js

# Getting started

To get the Node server running locally:

-  Clone this repo
-  `npm build` to install all required dependencies
-  `npm start server` to start the local server
-  `npm start client` to start the react app
-  Create an OAuth App (GitHUb) [instructions](https://docs.github.com/en/developers/apps/creating-an-oauth-app)
-  Create a .env file in the root folder and set these variables:
   -  REACT_APP_CLIENT_ID = Your Client ID
   -  REACT_APP_CLIENT_SECRET = Your Client Secret
   -  REACT_APP_REDIRECT_URI = http://localhost:3000/login

Alternately, to quickly try out this repo at [THIS](https://github-to-pdf.netlify.app/) link.

# Code Overview

## Application Structure

-  `client` - React App
-  `server` - Express App

## Folder Structure

├───client
├───server
