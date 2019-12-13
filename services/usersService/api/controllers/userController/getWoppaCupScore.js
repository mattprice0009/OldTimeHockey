require('dotenv').config();
const http = require('http');

const getTournament = (req, res, next) => {
  http.get({
    hostname: 'api.challonge.com',
    path: '/v1/tournaments/' + process.env.CHALLONGE_TOURNAMENT + '.json',
    port: 80,
  }, (apiRes) => {
    console.log(apiRes);
    console.log(apiRes);
    res.status(200).json(apiRes);
    req.payload = Object.assign({}, req.payload || {}, { apiRes });
    next();
  });
};

module.exports = {
  getTournament,
};
