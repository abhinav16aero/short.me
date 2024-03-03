const express = require('express');
const router = express.Router();
const {HandleNewURL,handleGetAnalytics,} = require('../controllers/url')
router.post("/", HandleNewURL);
router.get("/analytics/:shortId", handleGetAnalytics);
module.exports = router;
