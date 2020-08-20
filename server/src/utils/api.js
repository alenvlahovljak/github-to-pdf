//require axios configuration
const axios = require("../services/axios");

//define GitHub auth API
const githubAuthAPI = (method, url, data) => {
	return axios({
		method,
		url,
		data
	});
};

//define get GitHub user API
const getUserAPI = (method, url, data) => {
	return axios({
		method,
		url,
		data
	});
};

//export APIs
module.exports = {
	githubAuthAPI,
	getUserAPI
};
