//require neccesary modules
const fs = require("fs");
const path = require("path");
const app = require("../../app");
const request = require("supertest");

//delete JSON
afterAll(() => {
	const dir = path.join(__dirname, "../../public/storage/profiles/json");
	fs.readdir(dir, (err, files) => {
		if (err) throw err;
		for (let file of files) {
			fs.unlink(path.join(dir, file), (err) => {
				if (err) throw err;
			});
		}
	});
});

test("Should create JSON", async () => {
	const res = await request(app)
		.post("/convert/json")
		.send({
			login: "alenvlahovljak",
			name: "Alen Vlahovljak",
			company: "",
			blog: "https://medium.com/@AlenVlahovljak",
			location: "Bosnia and Herzegovina",
			email: "alen_vlahovljak@hotmail.com",
			bio: "Faculty of Information Technologies",
			node_id: "MDQ6VXNlcjQ1NjM5Mjgy"
		})
		.expect(201);
	expect(res.body).toMatchSnapshot();
});
