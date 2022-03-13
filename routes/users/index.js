const express = require('express');
const router = express.Router();
const usersRoutes = require('./usersRouter');

router.use('/', usersRoutes);

module.exports = router;
