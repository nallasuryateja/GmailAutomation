// 5. routes/jobRoutes.js
const express = require("express");
const {
  createJob,
  getJobs,
  sendJobEmails,
} = require("../controllers/jobController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createJob);
router.get("/", authMiddleware, getJobs);
router.post("/send-emails", authMiddleware, sendJobEmails);

module.exports = router;
