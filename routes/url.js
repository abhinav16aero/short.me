const express = require('express');
const router = express.Router();
const {HandleNewURL} = require('../controllers/url')
router.post("/", HandleNewURL);

module.exports = router;
