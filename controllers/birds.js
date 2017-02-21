var express = require('express');
var app = express();
var birdRouter = express.Router();
var Birds = require('../client/src/models/birds');

var BirdQuery = require('../client/db/birdQuery');
var query = new BirdQuery();

birdRouter.get('/', function(req, res) {
  query.all(function(results){
    res.json(results);
    console.log(results)
  });
});

module.exports = birdRouter;