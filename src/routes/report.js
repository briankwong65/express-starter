import express from 'express';
import reportController from '../controller/report-controller';

const router = express.Router();

router.get('/generator', reportController.generateReport);

module.exports = router;
