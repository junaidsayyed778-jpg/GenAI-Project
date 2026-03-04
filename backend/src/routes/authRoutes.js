const express = require("express");
const { registerUser, loginUser } = require("../controller/authController");

const router = express.Router();
/** 
* @routes POST /api/auth/register
* @description Register a new user
* @access public
*/
router.post("/register", registerUser)

/**
 * @routes POST /api/auth/login
 * @description Login a user
 * @access public
 */
router.post("/login", loginUser)
module.exports = router;