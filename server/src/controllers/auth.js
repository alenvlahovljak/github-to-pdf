//define login auth controller
const loginUser = async (req, res, next) => {
	try {
		const { client_id, redirect_uri } = req.body;
		console.log("BODY", req.body);
		return res.json({ message: "Working" });
	} catch (err) {
		next(err);
	}
};

//export auth controllers
module.exports = { loginUser };
