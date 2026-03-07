const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../middlewares/fileMiddleware");
const { generateInterviewReportController } = require("../controller/interviewController");

const router = express.Router();
/**
 * @route POST /api/interview/
 * @desc Generate interview report based on candidate resume, self description and job description
 * @access private
 */
router.post ("/", authMiddleware, upload.single("resume"), generateInterviewReportController)
module.exports = router;