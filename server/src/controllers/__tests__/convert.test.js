//require neccesary modules
const { convertControllers } = require("..");

test("Should not create JSON", async () => {
	const req = { body: {} };
	const res = { status: (code) => code };
	const next = () => {};
	const data = await convertControllers.convertToJSON(req, res, next);
	expect(data).toBe(undefined);
});
