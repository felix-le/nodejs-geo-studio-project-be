const express = require('express');
const router = express.Router();
const { statusConstants } = require('../constants/status.constant');
const userRouter = require('./users');
router.get('/', function (req, res, next) {
  res
    .status(statusConstants.SUCCESS_CODE)
    .json('Welcome to the Studio API. Lets begin');
});

router.use('/users', userRouter);

module.exports = router;
