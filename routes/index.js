const express = require('express');
const router = express.Router();
const { statusConstants } = require('../constants/status.constant');
const dadRouter = require('./dad');
const meRouter = require('./me');
const momRouter = require('./mom');
router.get('/', function (req, res, next) {
  res
    .status(statusConstants.SUCCESS_CODE)
    .json(
      'Welcome to the COMP2106 MEAN API. Lets begin with /dad OR /mom OR /me'
    );
});

router.use('/dad', dadRouter);
router.use('/me', meRouter);
router.use('/mom', momRouter);
module.exports = router;
