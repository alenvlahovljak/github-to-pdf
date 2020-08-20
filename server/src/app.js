//require necessary modules
const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//execute Express app
const app = express();

//require error controller
const { errorController } = require("./controllers/errors");

//require routes
const { authRoutes, convertRoutes } = require("./routes");

app.use(express.static(path.join(__dirname, "../public")));

//configure modules usage
app.use(
	cors({
		credentials: true,
		origin: (origin, cb) => {
			/*if (CORS.WHITE_LIST.includes(origin)) */ return cb(null, true);
			cb(new Error("Not allowed by CORS!"));
		}
	})
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use routes
app.use("/auth", authRoutes);
app.use("/convert", convertRoutes);

//catch 404 and forward to error handler
app.use((req, res, next) => {
	let err = new Error("Page Not Found!");
	err.status = 404;
	next(err);
});

//use error controller
app.use(errorController);

//export Express app
module.exports = app;
