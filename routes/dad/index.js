const express = require('express');
const router = express.Router();
const dadRouter = require('./dad');

router.use('/', dadRouter);

module.exports = router;
