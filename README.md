# GitHub to PDF

Application is authenticating your GitHub account thought OAuth Third-part logic. After verification, you can (temporarily) change your info (if you wish), and export it as JSON of PDF.

> ### Technologies: React.js, Express.js, Node.js

# Getting started

To get the Node server running locally:

-  Clone this repo
-  `npm build` to install all required dependencies
-  `npm run server` to start the local server
-  `npm run client` to start the react app
-  Create an OAuth App (GitHUb) [instructions](https://docs.github.com/en/developers/apps/creating-an-oauth-app)
-  Create a .env file in the root folder and set these variables:
   -  REACT_APP_CLIENT_ID = Your Client ID
   -  REACT_APP_CLIENT_SECRET = Your Client Secret
   -  REACT_APP_REDIRECT_URI = http://localhost:3000/login
-  In order to serve .env file you can use for example use [dotenv](https://www.npmjs.com/package/dotenv) - a zero-dependency module that loads environment variables from a .env file into process.env.

Alternately, to quickly try out this repo at [THIS](https://github-to-pdf.netlify.app/) link.

# Code Overview

## Application Structure

-  `client` - React App
-  `server` - Express App

## Folder Structure

```
├───client
└───server
```

## Storage

Your JSON files are saving into storage at `server/src/public/profiles/json`

# Delpoy

-  Frontend Delpoy process at [THIS](https://github.com/alenvlahovljak/github-to-pdf/blob/master/client/README.md#deploy) link.
-  Backend Deploy process at [THIS](https://github.com/alenvlahovljak/github-to-pdf/blob/master/server/README.md#deploy) link.
