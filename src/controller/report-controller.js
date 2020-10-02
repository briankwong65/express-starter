import reportService from '../services/report-service';

async function generateReport(req, res) {
  let data = 'success';

  // using the service function from report-service
  data = await reportService.service('GOOD!');
  return res.status(200).send(data);
}

module.exports = {
  generateReport,
};
