module.exports = (server, handleNext) => {
  // Next
  server.route(/^\/(?:(?!api)).*/).get((req, res) => {
    return handleNext(req, res);
  });
};
