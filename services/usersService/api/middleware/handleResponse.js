const handleResponse = (req, res) => {
  const { err = {}, message = '', payload = {}, status = 500 } = req;
  res.status(status).json({ err, message, payload });
};

module.exports = {
  handleResponse,
};
