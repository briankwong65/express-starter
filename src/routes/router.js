import express from 'express';

const router = express.Router();

router.use('/report', require('./report'));

module.exports = router;
