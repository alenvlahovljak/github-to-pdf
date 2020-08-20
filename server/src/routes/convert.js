//require necessary modules
const express = require("express");

//configure express Router
const router = express.Router();

//require controller
const { convertToJSON } = require("../controllers/convert");

//define auth route
router.route("/json").post(convertToJSON);

//export auth route
module.exports = router;
