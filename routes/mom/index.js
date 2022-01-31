const express = require('express');
const router = express.Router();
const momRouter = require('./mom');

router.use('/', momRouter);

module.exports = router;
