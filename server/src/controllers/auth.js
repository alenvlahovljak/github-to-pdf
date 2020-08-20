//require necessary module
const { githubAuthAPI, getUserAPI } = require("../utils/api");

//require constants
const { GITHUB_AUTH, GITHUB_USER_URL } = require("../utils/constants");

//define login auth controller
const loginUser = async (req, res, next) => {
	try {
		const auth = await githubAuthAPI("POST", `${GITHUB_AUTH}/access_token`, {
			...req.body,
			client_secret: process.env.CLIENT_SECRET
		});

		if (!auth.data.includes("access_token")) {
			return res.status(401).json({ message: "Unauthorized!" });
		}

		const user = await getUserAPI("GET", `${GITHUB_USER_URL}?${auth.data}`);
		return res.status(200).json(user.data);
	} catch (err) {
		next(err);
	}
};

//export auth controllers
module.exports = { loginUser };
