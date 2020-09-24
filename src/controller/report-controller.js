const reportService = require('../services/report-service');

async function generateReport(req, res) {
  // step - function
  const inputFile = req.files.foo;
  console.log(inputFile);
  let data = 'success';
  data = await reportService.convertExceltoJSON('GOOD!');
  return res.status(200).send(data);
}

module.exports = {
  generateReport,
};
