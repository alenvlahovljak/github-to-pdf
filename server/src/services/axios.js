//require necessary modules
const axios = require("axios");

//require constant
const { GITHUB_AUTH } = require("../utils/constants");

//create axios instance
const instance = axios.create();

//set headers
axios.defaults.headers.common["Content-Type"] = "multipart/form-data";

//handle instance interceptors
instance.interceptors.request.use(
	(response) => response,
	(err) => {
		if (err && err.response) return Promise.reject(err.response);
		if (err && err.request) return Promise.reject(err.request);
		return Promise.reject(err);
	}
);

//export instance
module.exports = instance;
