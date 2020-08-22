//require neccesary modules
const app = require("../../app");
const request = require("supertest");

//delete JSON files
afterAll(() => {
	const dir = path.join(__dirname, "../../../public/storage/profiles/json");
	fs.readdir(dir, (err, files) => {
		if (err) throw err;
		for (let file of files) {
			fs.unlink(path.join(dir, file), (err) => {
				if (err) throw err;
			});
		}
	});
});
