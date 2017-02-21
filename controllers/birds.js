var express = require('express');
var app = express();
var birdRouter = express.Router();

var BirdQuery = require('../client/db/birdQuery');
var query = new BirdQuery();

birdRouter.get('/', function(req, res) {
  query.all(function(results){
    res.json(results);
  });
});

module.exports = filmRouter;