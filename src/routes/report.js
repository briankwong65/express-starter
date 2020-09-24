const express = require('express');
const reportController = require('../controller/report-controller');

const router = express.Router();

router.get('/generator', reportController.generateReport);

module.exports = router;
