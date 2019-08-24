require('dotenv').config();
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const corsOptions = {
  origin: process.env.DOMAIN,
  credentials: true,
};

const server = express();
server.use(helmet());
server.use(express.json());
server.use(morgan('combined'));
server.use(cors(corsOptions));

module.exports = server;
