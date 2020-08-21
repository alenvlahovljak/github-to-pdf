//require necessary modules
const fs = require("fs");
const path = require("path");

//define convert to JSON controller
const convertToJSON = (req, res, next) => {
	try {
		const storage = path.join(__dirname, `../public/storage/profiles/json/${req.body.node_id}.json`);
		fs.writeFile(storage, JSON.stringify(req.body), (err) => {
			if (err) return next();
			return res.status(201).json({ message: "JSON saved!" });
		});
	} catch (err) {
		next(err);
	}
};

//export convert controller
module.exports = { convertToJSON };
