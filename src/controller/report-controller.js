async function generateReport(req, res) {
  // step - function\

  const data = "success";
  return res.status(200).send(data);
}

module.exports = {
  generateReport,
};
