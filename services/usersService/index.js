require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const routes = require('./api/routes');

const port = process.env.PORT || 3000;

// establish mySQL connection
const dbConn = mysql.createConnection({
  database: process.env.SQL_DB,
  host: process.env.SQL_HOST,
  password: process.env.SQL_PW,
  user: process.env.SQL_USER,
});
dbConn.connect((err) => {
  if(err) throw err;
  console.log('Connected!');
});

const server = express();

server.use(express.json());

routes(server);

server.listen(port, () => {
  console.info(`Server listening on Port ${port}.`);
});
