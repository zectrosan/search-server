const config = require('./config');
const express = require('express');
const elasticsearch = require('elasticsearch');

const app = express();

const client = elasticsearch.Client({
  hosts: config.es.hosts
});

app.use(express.json());

app.post('/search', (req, res, next) => {
  client
    .search({
      index: 'search',
      ...req.body
    })
    .then(res.json)
    .catch(next);
});

app.post('/index', (req, res, next) => {
  client
    .index({
      index: 'search',
      ...req.body
    })
    .then(res.json)
    .catch(next);
});

module.exports = app;