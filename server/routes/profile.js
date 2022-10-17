const express = require("express");
const router = express.Router();
const { getUserInfo } = require("../controllers/userInfo");
const { protect } = require("../middleware/auth");

router.route("/userinfo").get(protect, getUserInfo);

module.exports = router;
