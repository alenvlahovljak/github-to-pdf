//require necessary modules
const express = require("express");

//configure express Router
const router = express.Router();

//require controller
const { loginUser } = require("../controllers/auth");

//define auth route
router.route("/user").post(loginUser);

//export auth route
module.exports = router;
