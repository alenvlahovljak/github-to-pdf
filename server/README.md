# GitHub to PDF API

API is responsible for authenticating GitHub account.

> ### Technologies: Express.js, Node.js

# Getting started

To get the Node server running locally:

-  Clone this repo
-  `npm install` to install all required dependencies
-  `npm run start` to start the local server
-  You have to set this variable for local usage:
   -  REACT_APP_CLIENT_SECRET = Your Client Secret

Alternately, to quickly try out this repo in [Heroku](https://github-to-pdf-api.herokuapp.com/)

# Code Overview

## Dependencies

-  [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and Node.js.
-  [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.
-  [cors](https://www.npmjs.com/package/cors) - CORS is a Node.js package for providing a Connect/Express middleware.
-  [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for Node.js.

## Application Structure

-  `src/controllers/` - App route handlers and business logic.
-  `src/public/` - Folder contain JSON storage.
-  `src/routes/` - App routes, with HTTP methods. For example, you can define everything related to the user.
-  `src/services/` - Third-party services configuration.
-  `src/utils/` - Helper functions used by any controllers.
-  `src/index.js` - The entry point to backend.

## Folder structure

```
├───config
└───src
    ├───controllers
    ├───public
    │   └───storage
    │       └───profiles
    │           └───json
    ├───routes
    ├───services
    └───utils
```

## Error Handling

Using custom error controller.

## Storage

Your JSON files are saving into storage at `src/public/profiles/json`

# Deploy

Backend is deployed on [Heroku](https://github-to-pdf-api.herokuapp.com/).

The process of deploy:

-  Commit to Git master
-  Create Heroku app (CLI: `$ heroku create`)
-  Change Heroku name (CLI: `$ heroku apps:rename github-to-pdf-api`)
-  Update Git remotes (CLI: `$ git remote rm heroku` and then `$ heroku git:remote - a github-to-pdf-api.git`)
-  Set config variables:
   -  CLI: `$ heroku config:set CLIENT_SECRET=Your_client_secret`
-  Open Heroku app (CLI: `$ heroku open`) and test it
