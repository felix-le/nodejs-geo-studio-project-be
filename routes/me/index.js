const express = require('express');
const router = express.Router();
const meRouter = require('./me');

router.use('/', meRouter);

module.exports = router;
