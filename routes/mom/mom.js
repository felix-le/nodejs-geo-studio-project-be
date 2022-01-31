const express = require('express');
const router = express.Router();
const momCtrl = require('../../controllers/momCtrl');

router.get('/', momCtrl.getMom);

module.exports = router;
