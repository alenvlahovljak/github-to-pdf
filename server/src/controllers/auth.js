//define login auth controller
const loginUser = async (req, res, next) => {
	try {
		const {} = req.body;
		console.log("BODY", req.body);
		return res.status(200).json();
	} catch (err) {
		next(err);
	}
};

//export auth controllers
module.exports = { loginUser };
