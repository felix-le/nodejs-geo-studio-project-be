const express = require('express');
const router = express.Router();
const meCtrl = require('../../controllers/meCtrl');

router.get('/', meCtrl.getMe);

module.exports = router;
