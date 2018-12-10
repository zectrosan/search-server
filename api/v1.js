const config = require('../config');
const elasticsearch = require('elasticsearch');

const client = elasticsearch.Client({
  hosts: config.es.hosts
});
const { Router } = require('express');

const router = Router();

router.post('/search', (req, res, next) => {
  client
    .search({
      index: 'search',
      ...req.body,
      body: {
        highlight: {
          fields: {
            '*': {
              pre_tags: ['<b>'],
              post_tags: ['</b>']
            }
          }
        }
      }
    })
    .then(r => {
      console.log(r);
      res.json(r.hits);
    })
    .catch(next);
});

router.post('/index', (req, res, next) => {
  client
    .index({
      index: 'search',
      ...req.body
    })
    .then(res.json)
    .catch(next);
});

module.exports = router;