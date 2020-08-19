//require necessary modules
const express = require("express");
const router = express.Router();

//require controller
const { loginUser } = require("../controllers/auth");

//define auth route
router.route("/auth").post(loginUser);

//export auth route
module.exports = router;
