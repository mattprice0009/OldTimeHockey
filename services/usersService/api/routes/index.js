require('dotenv').config();

const { getWoppaCupScore } = require('../controllers');
const { handleResponse } = require('../middleware');

module.exports = (server) => {
  // Users
  server
    .route('/api/woppacup')
    .get(getWoppaCupScore, handleResponse);
};
