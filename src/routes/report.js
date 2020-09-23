const express = require("express");
const reportController = require("../controller/report-controller");

const router = express.Router();

router.post("/generator", reportController.generateReport);

module.exports = router;
