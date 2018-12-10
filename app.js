const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const elasticsearch = require('elasticsearch');

const apiV1 = require('./api/v1');

const app = express();

const client = elasticsearch.Client({
  hosts: config.es.hosts
});

app.use(morgan(config.environment == 'production' ? 'combined' : 'dev'));
app.use(express.json());

app.use('/api/v1', apiV1);

module.exports = app;
