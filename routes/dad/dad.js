const express = require('express');
const router = express.Router();
const dadCtrl = require('../../controllers/dadCtrl');

router.get('/', dadCtrl.getDad);

module.exports = router;
